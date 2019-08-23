const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const myObstacles = []
let interval
let frames = 0
let points = 0

// FIRST ITERATION: DRAW THE GAME BOARD

const drawRoad = () => {
  ctx.fillStyle = '#068200'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#808080'
  ctx.fillRect(30, 0, canvas.width - 60, canvas.height)

  ctx.strokeStyle = 'white'
  ctx.lineWidth = 7
  ctx.strokeRect(42, -10, canvas.width - 84, canvas.height + 20)

  ctx.lineWidth = 4

  const move = 20
  const space = 16
  const x = canvas.width / 2
  let y = 12
  for (i = 0; i < 15; i++) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, y + move)
    ctx.stroke()
    ctx.closePath()
    y += move + space
  }
}

// SECOND ITERARTION: DRAW PLAYER´S CAR
class Car {
  constructor() {
    this.width = 60
    this.height = 120
    this.x = (canvas.width / 2) - (this.width / 2)
    this.y = canvas.height - this.height - 10
    this.speedX = 0
    this.speedY = 0
    this.img = new Image()
    this.img.src = "/../starter_code/images/car.png"
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveRight() {
    if (this.x + this.width + 10 < canvas.width)
      this.x += 20
  }
  moveLeft() {
    if (this.x > 10)
      this.x -= 20
  }

  top() {
    return this.y
  }

  left() {
    return this.x
  }

  right() {
    return this.x + this.width
  }
  crashWith(obstacle) {
    return !(
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right())
  }
}

const elRayoMacuinEnAzulYSinRayo = new Car()

// THIRD ITERATION: MAKE PLAYER´S CAR MOVE RIGHT AND LEFT
document.onkeydown = event => {
  event.preventDefault()
  switch (event.keyCode) {
    case 37:
      elRayoMacuinEnAzulYSinRayo.moveLeft()
      break;
    case 39:
      elRayoMacuinEnAzulYSinRayo.moveRight()
      break;
    default:
  }
  updateCanvas()
}

function updateCanvas() {
  frames++
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawRoad()
  elRayoMacuinEnAzulYSinRayo.draw()
  drawObstacles()
  updateObstacles()
  checkGameOver()
  displayScore()
  ctx.fillText(`SCORE: ${points}`, 20, 40)
}
window.onload =


  function () {
    document.getElementById("start-button").onclick = function () {
      startGame();
    };
  }

function startGame() {
  interval = setInterval(updateCanvas, 20)
}

function stop() {
  clearInterval(interval)
}

function checkGameOver() {
  let crashed = myObstacles.some(obstacle => elRayoMacuinEnAzulYSinRayo.crashWith(obstacle))
  if (crashed)
    stop()
}

// FOURTH ITERATION: CREATE OBSTACLES

class Obstacle {
  constructor(width, x, y) {
    this.width = width
    this.height = 20
    this.color = '#890A00'
    this.x = x
    this.y = y
    this.speedY = 0
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  bottom() {
    return this.y + this.height
  }

  left() {
    return this.x
  }

  right() {
    return this.x + this.width
  }
}

function updateObstacles() {
  if (frames % 200 === 0) {
    let y = 0
    let minWidth = 200
    let maxWidth = elRayoMacuinEnAzulYSinRayo.width + 20
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
    let x = Math.floor(Math.random() * ((canvas.width - 242) - 47 + 1) + 47)
    myObstacles.push(new Obstacle(width, x, 0))
    myObstacles.push(new Obstacle(width, x, 0))
  }
}

function drawObstacles() {
  myObstacles.forEach(obstacle => {
    obstacle.y++
    obstacle.draw()
  })
}

function displayScore() {
  if (frames % 200 === 0) {
    points += 5
    ctx.font = "40px Impact"
    ctx.fillStyle = 'red'
  }
}