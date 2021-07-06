let gameLaunched = false

const gameImages = [    
  {name: 'roadImg', url: '../images/road.png', image: null},
  {name: 'carImg', url: '../images/car.png', image: null},
  {name: 'boomImg', url: '../images/boom.png', image: null},
  {name: 'gameOver', url: '../images/gameover.png', image: null},
]

window.onload = () => {
  document.getElementById('start-button').onclick = async () => {
    if(gameLaunched) return

    gameLaunched = true 

    Promise
      .all(gameImages.map(i => imageLoader(i)))
      .then(() => startGame(gameImages[0].image, gameImages[1].image, gameImages[2].image, gameImages[3].image))
      .catch(error => window.alert('Cannot load game images'))
  };

  function startGame(roadImg, carImg, boomImg, gameOver) {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')    

    let toogleCar = 0
    let GOver = false
    let carX = 250 - Math.floor(47.4/2)

    let score = 0 
    let scoreColor = ctx.createLinearGradient(0, 22, 0, 35)
    scoreColor.addColorStop(0, 'rgb(254, 251, 3)')
    scoreColor.addColorStop(1, 'rgb(234, 0, 14)')

    let countdownColor = ctx.createLinearGradient(0, 250, 0, 333)
    countdownColor.addColorStop(0, 'rgb(254, 251, 3)')
    countdownColor.addColorStop(1, 'rgb(234, 0, 14)')


    //Moving the car
    document.addEventListener('keydown', carMoves)
    document.addEventListener('keyup', () => toogleCar = 0)
    function carMoves(e){
      if(e.key === "ArrowRight") return toogleCar = 1         
      if(e.key === "ArrowLeft") return toogleCar = -1

      return toogleCar = 0
    }

    //countdown at start
    let start = 0
    for(let i = 0 ; i < 3 ; i++){
      setTimeout(() => {
        start = 3 - i
      }, i * 1000);

      setTimeout(() => {
        start = 0
      }, i * 1000 + 800);
    }

    //Adding obtacle at start + acceleration
    const obstacles = []
    let timer = 4000
    let createObstacles 

    setTimeout(interval, 3000)
    
    function interval(){
      clearInterval(createObstacles)
      newObstacle(obstacles)
      timer = changeTimer(timer)
      createObstacles = setInterval(interval, timer)
    }

    //Draw the obtacles 60fps
    const drawObstacles = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      if(toogleCar === -1) carX -= 10
      if(toogleCar === 1) carX += 10
      if(carX < -10 || carX > 460) GOver = !GOver

      ctx.drawImage(roadImg, 0, 0, 500, 700)
      ctx.drawImage(carImg, carX, canvas.height - 150, 47.4, 95.7)

      obstacles.forEach((o, i) => {

        //delete the obstacle element when goes out of the frame
        if(o[1] > 700){
          score += timer/100
          obstacles.splice(i, 1)
        }

        //displays the obstacle right or left 
        //right
        if(o[2] === 1){
          ctx.fillStyle = o[3]
          ctx.fillRect(canvas.width - 61, o[1],  -o[0], -30)

          //collision detection
          if(o[1] > canvas.height - 150 && o[1] < canvas.height - 54 && carX + 48 > canvas.width - 61 - o[0]){
            GOver = drawAfterCollision(
              boomImg, 
              ctx,
              carX - 10, 
              canvas.height - 200, 
              100, 
              100,
              GOver)
          }
        }
        //left
        else{
          ctx.fillStyle = o[3]
          ctx.fillRect(65, o[1], o[0], -30)

          //collision detection
          if(o[1] > canvas.height - 150 && o[1] < canvas.height - 54 && carX < 65 + o[0]){
            GOver = drawAfterCollision(
              boomImg, 
              ctx,
              carX - 50, 
              canvas.height - 200, 
              100, 
              100,
              GOver)
          }
        }

        o[1] += 5
      })

      //Drawing start countdown
      if(start !==0){
        ctx.font = 'bold 150px sans-serif'
        ctx.fillStyle = countdownColor
        ctx.fillText(start, canvas.width/2 - 75/2, 350)
      }

      //Drawing the score
      ctx.font = '25px sans-serif';
      ctx.fillStyle = scoreColor
      ctx.fillText(`Score: ${score}`, canvas.width - 190, 35)

      //Drawing Game Over
      if (GOver){
        clearInterval(createObstacles)
        clearInterval(drawObstacles)
        document.removeEventListener('keydown', carMoves)
        ctx.drawImage(gameOver, canvas.width/2 - gameOver.width/2, canvas.height/2 - gameOver.height/2, gameOver.width, gameOver.height)
        gameLaunched = false
      } 
    }, 16)
  }
};

function newObstacle(obstacles){
  const randomLength = Math.max(Math.floor(Math.random() * 300), 150)
  //-1 is left 1 is right
  const side = Math.random() <= .5 ? -1 : 1
  return obstacles.push([randomLength, 0, side, getRandomColor()])
}

function changeTimer(t){
  if(t < 801) return 800
  return t -= 200
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawCar(ctx, canvas, roadImg, carImg){
  ctx.drawImage(roadImg, 0, 0, 500, 700)
  ctx.drawImage(carImg, carX, canvas.height - 150, 47.4, 95.7)
}

function drawAfterCollision(img, ctx, x, y, w, h, toogle){
  ctx.drawImage(img, x, y, w, h)
  return !toogle
}

function imageLoader(obj){
  return new Promise((res, rej) => {
    obj.image = new Image
    obj.image.onload = () => res() 
    obj.image.onerror = () => rej(new Error(`Unable to load image: ${obj.url}`))

    obj.image.src = obj.url
  })
}