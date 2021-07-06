let alreadyClicked = false

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    if(alreadyClicked) return

    alreadyClicked = true 
    
    const roadImg = new Image
    const carImg = new Image
    const boomImg = new Image
    const gameOver = new Image 

    roadImg.src = '../images/road.png'
    carImg.src = '../images/car.png'
    boomImg.src = '../images/boom.png'
    gameOver.src = '../images/gameover.png'  

    boomImg.addEventListener('load', () => startGame(roadImg, carImg, boomImg, gameOver))
  /*   let images = Promise.all(ImagesLoader())
    images.then(console.log(images)) */
    
  };

  function startGame(roadImg, carImg, boomImg, gameOver) {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')    

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

    function carMoves(e){
      if(e.key === "ArrowRight"){
        if(carX >= 397) return
  
        carX += 10
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(roadImg, 0, 0, 500, 700)
        ctx.drawImage(carImg, carX, canvas.height - 150, 47.4, 95.7)
        return carX
      }
      
      if(e.key === "ArrowLeft"){
        if(carX <= 57) return
  
        carX -= 10
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(roadImg, 0, 0, 500, 700)
        ctx.drawImage(carImg, carX, canvas.height - 150, 47.4, 95.7)
        return carX
      }
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
      console.log(timer)
      createObstacles = setInterval(interval, timer)
    }

    //Draw the obtacles 60fps
    const drawObstacles = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
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
            ctx.drawImage(boomImg, carX - 10, canvas.height - 200, 100, 100)
            clearInterval(createObstacles)
            clearInterval(drawObstacles)
            document.removeEventListener('keydown', carMoves)
            GOver = !GOver
          }
        }
        //left
        else{
          ctx.fillStyle = o[3]
          ctx.fillRect(65, o[1], o[0], -30)

          //collision detection
          if(o[1] > canvas.height - 150 && o[1] < canvas.height - 54 && carX < 65 + o[0]){
            ctx.drawImage(boomImg, carX - 50, canvas.height - 200, 100, 100)
            clearInterval(createObstacles)
            clearInterval(drawObstacles)
            document.removeEventListener('keydown', carMoves)
            GOver = !GOver
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
        ctx.drawImage(gameOver, canvas.width/2 - gameOver.width/2, canvas.height/2 - gameOver.height/2, gameOver.width, gameOver.height)
        alreadyClicked = false
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

async function ImagesLoader(){
  const images = Array.of(
    {name: 'boomImg', url: '../images/boom.png', image: null},
    {name: 'roadImg', url: '../images/boom.png', image: null},
    {name: 'carImg', url: '../images/boom.png', image: null})

  images.forEach(img => {
    img.image = new Promise((res, rej) => {
      let imgP = new Image()
      imgP.onload = () => res(imgP)
      const errorMsg = 'Unable to load image at ' + img.url
      imgP.onerror = () => rej(new Error(errorMsg))
      imgP.src = img.url
    })
  })

  return images
}

 