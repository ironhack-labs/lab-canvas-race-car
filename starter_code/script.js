const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const myObstacles = []

let frames = 0
let points = 0

const drawBoard = function() {
  //BOARD GREEN
  ctx.beginPath()
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 40, 630)
  ctx.fillRect(410, 0, 40, 630)
  //BOARD GRAY
  ctx.beginPath()
  ctx.fillStyle = 'gray'
  ctx.fillRect(40, 0, 10, 630)
  ctx.fillRect(400, 0, 10, 630)
  //CENTER BOARD GRAY
  ctx.fillRect(60, 0, 330, 630)
  //WHITE LINES
  ctx.beginPath()
  ctx.fillStyle = 'white'
  ctx.fillRect(223, 30, 5, 20)
  ctx.fillRect(223, 70, 5, 20)
  ctx.fillRect(223, 110, 5, 20)
  ctx.fillRect(223, 150, 5, 20)
  ctx.fillRect(223, 190, 5, 20)
  ctx.fillRect(223, 230, 5, 20)
  ctx.fillRect(223, 270, 5, 20)
  ctx.fillRect(223, 310, 5, 20)
  ctx.fillRect(223, 350, 5, 20)
  ctx.fillRect(223, 390, 5, 20)
  ctx.fillRect(223, 430, 5, 20)
  ctx.fillRect(223, 470, 5, 20)
  ctx.fillRect(223, 510, 5, 20)
  ctx.fillRect(223, 550, 5, 20)
  ctx.fillRect(223, 590, 5, 20)
  ctx.fillRect(223, 630, 5, 20)
  ctx.stroke()
  ctx.closePath()
}

class Component {
  constructor(width, height, color, x, y) {
    this.x = 200
    this.y = 520
    this.width = 50
    this.height = 90
    this.img = new Image()
    this.img.src = './images/car.png'
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveRight() {
    if (this.x + this.width + 10 < canvas.width) this.x += 20
  }
  moveLeft() {
    if (this.x > 10) this.x -= 20
  }
  // crashWith(obstacle) {
  //   return !(
  //     this.top() > obstacle.bottom() ||
  //     this.right() < obstacle.left() ||
  //     this.left() > obstacle.right()
  //   )
}

const car = new Component()

document.onkeydown = event => {
  switch (event.keyCode) {
    case 37:
      car.moveLeft()
      break
    case 39:
      car.moveRight()
      break
    default:
      break
  }
  updateCanvas()
}

function updateCanvas() {
  frames += 1
  clearCanvas()
  drawBoard()
  car.draw()
  updateObstacles()
  checkGameOver()
  displayScore()
  ctx.fillText(`SCORE: ${points}`, 90, 50)
}

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame()
  }

  function startGame() {}
}

function startGame() {
  interval = setInterval(updateCanvas, 20)
}

function stop() {
  clearInterval(interval)
}

function checkGameOver() {
  let crashed = myObstacles.some(Obstacle => car.crashWith(Obstacle))
  if (crashed) stop()
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// ------------------

class Obstacle {
  constructor(width, x, y) {
    this.width = width
    this.height = 20
    this.color = 'brown'
    this.x = x
    this.y = y
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
  if (frames % 120 === 0) {
    let y = 0
    let minWidth = 200
    let maxWidth = car.width + 20
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
    let x = Math.floor(Math.random() * (canvas.width - 242 - 47 + 1) + 47)
    myObstacles.push(new Obstacle(width, x, 0))
    myObstacles.push(new Obstacle(width, x, 0))
  }
}

function drawObstacles() {
  myObstacles.forEach(Obstacle => {
    obstacle.y++
    obstacle.draw()
  })
}

function displayScore() {
  if (frames % 200 === 0) {
    points += 5
    ctx.font = '40px Impact'
    ctx.fillStyle = 'red'
  }
}
