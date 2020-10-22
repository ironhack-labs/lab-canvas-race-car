const $canvas = document.querySelector('canvas')
const $context = $canvas.getContext('2d')
const $button = document.querySelector('#start-button')
let gameInterval
let frames = 0
let ratio = 200
let score = 0
let obstacles = []


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("started")
    if (gameInterval) return
    game = setInterval(updateGame, 1000/60)
    
    
  }
  function clearCanvas() {
    $context.clearRect(0,0, $canvas.width, $canvas.height)
  }
  function updateGame() {
    
    frames++
    // console.log(frames)
    clearObstacles()
    generateObstacles()
    clearCanvas()
    checkCollitions()
    
    board.draw()
    car.draw()
    drawObstacles()
    printScore()
    
  }
  

};

class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.height = $canvas.height
    this.img = new Image()
    this.img.src = ('../images/road.png')
  }
  draw() {
    $context.drawImage(this.img, this.x, this.y, $canvas.width, $canvas.height)
  }
}

class Car {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 40
    this.height = 70
    this.img = new Image()
    this.img.src = ('../images/car.png')
  }
  draw() {
    $context.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveLeft() {
    this.x-=7
  }
  moveRight() {
    this.x+=7
  }
  isTouching(obstacle) {
    return (
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y &&
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x
    )
  }
}

class Obstacle {
  constructor(x, width) {
    this.y  = 0
    this.x = x
    this.height = 30
    this.width = width
  }
  draw() {
    this.y++
    $context.fillStyle = 'crimson'
    $context.fillRect(this.x, this.y, this.width, this.height)
  }
}
let board = new Board()
let car = new Car(250, $canvas.height - 130)

function generateObstacles() {
  if (frames % ratio === 0) {
    const min = 100
    const max = $canvas.width - 100
    const randomWidth = Math.floor(Math.random() * (max - min))
    const gap = 100
    obstacles.push(new Obstacle(0, randomWidth))
    
    obstacles.push(
      new Obstacle(randomWidth + gap, $canvas.width - randomWidth - gap)
    )
  }
}
function drawObstacles() {
  obstacles.forEach(obs => obs.draw())
}
function clearObstacles() {
  obstacles = obstacles.filter(obs => obs.y > -obs.height)
}
function checkCollitions() {
  obstacles.forEach(obs => {
    if (car.isTouching(obs)) {
      alert("perdiste")
    }
  })
}

function printScore() {
  if (frames % 200 === 0 && frames > 500) score++
  $context.font = "20px Sans-serif"
  $context.fillStyle = "black"
  $context.fillText(`Score: ${score}`, $canvas.width - 300, 30)
}






document.onkeydown = e => {
  switch (e.key){
    case 'ArrowLeft':
    car.moveLeft()
    break;
    case 'ArrowRight': 
    car.moveRight()
    break;
    default:
      break;
  }
}