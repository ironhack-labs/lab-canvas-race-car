const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');

let car
let obs = []
let intervalId
let frames = 0
let score = 0
let isGameOver = false


function drawRoad(){
  ctx.fillStyle= 'green';
  ctx.fillRect(0,0, $canvas.width, $canvas.height);
  ctx.fill();
  
  ctx.fillStyle='grey'
  ctx.fillRect(50, 0, $canvas.width -100, $canvas.height)
  
  ctx.fillStyle = 'white'
  ctx.fillRect(70, 0, $canvas.width-140, $canvas.height)
  
  ctx.fillStyle = 'grey'
  ctx.fillRect(80, 0, $canvas.width-160, $canvas.height)

  ctx.strokeStyle='white'
  ctx.beginPath()
  ctx.setLineDash([50, 20])
  ctx.moveTo($canvas.width/2, 0)
  ctx.lineTo($canvas.width/2, $canvas.height)
  ctx.stroke()
}


class Car {
  constructor(){
    this.width = 50;
    this.height=100
    this.x = ($canvas.width / 2) - (this.width / 2);
    this.y = $canvas.height -150;
    this.img = new Image()
    this.img.src = './images/car.png'
    this.img.onload = () =>{
      this.draw()
    }
  }

  draw(){
      ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }

  turnRight(){
    if( this.x >= ($canvas.width-this.width-80)) return
    this.x += 5
  }
  turnLeft(){
    if( this.x <= 80) return
    this.x -= 5
  }

  isTouching(obstacle){
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }

}

class Obstacle {
  constructor(x){
    this.width = (Math.random()* 200) + 80
    this.height=50;
    this.x = x;
    this.y = 0;
  }
  draw(){
    this.y += 1
    ctx.fillStyle = "brown"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

function checkCollition(){
  obs.forEach( obstacle => {
    if( car.isTouching(obstacle)){
      isGameOver=true
      GameOver()
      clearInterval(intervalId)
  return}
  })
}

function GameOver(){
  const title = "GAME OVER"
  const msj = `Your score is: ${score}`

  ctx.fillStyle = 'red'
  ctx.clearRect(0,0, $canvas.width, $canvas.height)
  ctx.fillText(title, ($canvas.width/2)-50, 300)
  ctx.fillText(msj, ($canvas.width/2) - 60, 320)
  obs=[]
}

function createObstacle (){
  obs.push(new Obstacle(Math.random()*200))
}

function drawObstacles(){
  obs.forEach(obstacle => obstacle.draw())
}

function drawScore (){
  ctx.font="20px Arial"
  ctx.fillStyle = "white"
  ctx.fillText(`Score: ${score}`, $canvas.width-200, 50);
}

function update(){
  frames++
  ctx.clearRect( 0,0, $canvas.width, $canvas.height)
  if(frames%300 === 0) createObstacle();
  if(frames%50 === 0) score++
  checkCollition()
  drawRoad()
  car.draw()
  drawObstacles()
  drawScore()
  if( isGameOver ) GameOver()
}



window.onload = function() {
  
  
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  document.addEventListener('keydown', ({keyCode}) => {
    switch(keyCode){
      case 39:
        return car.turnRight();
        case 37:
          return car.turnLeft();
    }
  })



  function startGame() {
    isGameOver=false
    car = new Car()
    createObstacle();
    intervalId = setInterval(update, 1000/60)
    score = 0
  }
}
;


