window.onload = () =>
{
  let timeCounter = 0;
  let score = 0;
  const canvas = document.getElementById('canvas');

  const ctx = canvas.getContext('2d')
  let animageId = null;

  let obstacleArray = []
  let boardImage = new Image()
  boardImage.src = '../images/road.png'
  let carImage = new Image()
  carImage.src = '../images/car.png'

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.getElementById('char1').onclick = () => {
    carImage.src = '../images/car.png'
  };
  document.getElementById('char2').onclick = () => {
    carImage.src = '../images/car2.png'

  };
  // document.getElementById('char3').onclick = () => {
  //   score=300
  // };
  // document.getElementById('char4').onclick = () => {
  //   score=400
  // };


  document.body.onkeydown = function(e){
    if(e.key === 'ArrowRight'){ //Move right
      if(car.x < 250)
        car.x+=10
    }
    if(e.key === 'ArrowLeft'){ //Move left
      if(car.x > 0)
        car.x-=10
    }
}

  function startGame() {
    animate()
  }

  function drawCar(){
    ctx.drawImage(car.image,car.x,car.y,50,100)
  }

  function drawBoard(){
    ctx.drawImage(board.image, board.x,board.y,300, 800)
  }

  function drawObstacles(){
    for(i=0;i<obstacleArray.length;i++)
    {
      ctx.fillStyle="red"
      if (obstacleArray[i].y > 700)
      {
        score++
        obstacleArray.pop()
      }
      else
      {
        ctx.fillRect(obstacleArray[i].x,obstacleArray[i].y+=5,obstacleArray[i].xLength,20)
      }
    }
  }

  let car = {
    x:50,
    y:600,
    image: carImage
  }

  let board = {
    x: 0,
    y: 0,
    image: boardImage
  }

  function createObstacle()
  {
    for(i=obstacleArray.length; i > 0; i--)
    {
      obstacleArray[i] = obstacleArray[i-1]
    }
    obstacleArray[0] = {x: Math.floor(Math.random()*200), y: 0, xLength:Math.floor(Math.random()*25 + 75)}
  }

  function detectCollision(){

    for(i=0;i<obstacleArray.length;i++)
    {
      var rect1 = {x: obstacleArray[i].x, y:obstacleArray[i].y, width: obstacleArray[i].xLength, height: 20} //Our purple square

      var rect2 = {x: car.x, y: car.y, width: 50, height: 100}//Our car

      if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y) {
          // collision detected!
          return true
      }
    }
    return false
  }

  function scoreUpdate()
  {
    ctx.font = "30px Arial white"
    ctx.fillStyle = "white"
    ctx.fillText(`Score: ${score}`,50,30)
  }

  function gameOver()
  {
    for(i=0;i<obstacleArray.length;i++)
    {
      obstacleArray.pop()
    }
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,300,700)
    ctx.fillStyle = "red"
    ctx.fillText("Game Over", 80, 300)
    ctx.fillStyle = "white"
    ctx.fillText(`Score: ${score}`, 100 , 330)
    score = 0
  }

  function animate(){ //Where the magic happens
    ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the canvas - flipping to a blank page
    if(timeCounter%100 === 1)
    {
      createObstacle()
    }
    timeCounter++
    
    drawBoard()
    drawObstacles()
    drawCar()
    scoreUpdate()
    if(detectCollision())
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      gameOver()
      return
    }
    animateId = window.requestAnimationFrame(animate) //Game rendering -infinite loop that goes super fast
  }
};

