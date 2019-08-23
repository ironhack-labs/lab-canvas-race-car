const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
const myObstacles = []
let interval
let score = 0

// Fábrica de carritos del juego
class Car {
  constructor(x, y, width, height) {
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = './images/car.png'
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveRight() {
    this.x >= canvas.width ? (this.x = 0) : (this.x += 20)
  }
  moveLeft() {
    this.x <= 0 ? (this.x = canvas.width) : (this.x -= 20)
  }
  // Métodos para el choque
  top() {
    return this.y
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
  crashWith(obstacle) {
    // Chocar = tener el mismo espacio
    return !(
      this.bottom() < obstacle.top() || // Chocan por la parte inferior?
      this.top() > obstacle.bottom() || // Chocan por la parte inferior?
      this.right() < obstacle.left() || // Chocan por la parte izquierda?
      this.left() > obstacle.right()
    )
  }
}

// Fábrica de obstáculos
class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  // Métodos para el choque
  top() {
    return this.y
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

const carrito = new Car(180, canvas.height - 90, 40, 80)

const drawBoardGame = () => {
  // Líneas verdes
  ctx.fillStyle = '#008100'
  ctx.fillRect(0, 0, 50, canvas.height)
  ctx.fillRect(canvas.width - 50, 0, 50, canvas.height)
  // Líneas grises al lado de las verdes
  ctx.fillStyle = '#808080'
  ctx.fillRect(50, 0, 10, canvas.height)
  ctx.fillRect(canvas.width - 60, 0, 10, canvas.height)
  // Camino medio
  ctx.fillRect(70, 0, canvas.width - 140, canvas.height)
  // Líneas blancas
  ctx.fillStyle = '#fff'
  for (let i = 0; i < 20; i++) {
    ctx.fillRect(canvas.width / 2 - 2.5, i * 40, 5, 15)
  }
}

function updateCanvas() {
  frames += 1
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBoardGame()
  carrito.draw()
  drawObstacles()
  updateObstacles()
  checkGameOver()
  updateScore()
}

function updateScore() {
  ctx.font = '50px Georgia'
  ctx.fillStyle = '#111'
  ctx.fillText(`Score: ${score}`, 40, 40)
}

// Lo mismo que el start()
const startGame = () => {
  // 1. Pintar el board
  gameBoard.appendChild(canvas)
  drawBoardGame()
  carrito.draw()
  // 2. Actualizar el canvas
  interval = setInterval(updateCanvas, 20)
}

// Empieza el juego cuando da click en START
const startButton = document.querySelector('#start-button')
startButton.onclick = () => {
  startGame()
}

// Mover el carrito usando las teclas
document.onkeydown = e => {
  switch (e.keyCode) {
    case 37: // Left arrow
      carrito.moveLeft()
      break
    case 39: // Right arrow
      carrito.moveRight()
      break
    case 32:
      location.reload()
    default:
      break
  }
}

function updateObstacles() {
  if (frames % 250 === 0) {
    let y = 0
    let minWidth = 2 * carrito.width
    let maxWidth = (canvas.width - 2 * carrito.width) / 2
    let width = Math.floor(Math.random() * (maxWidth - minWidth)) + 200

    let randomX = Math.floor(Math.random() * canvas.width)

    myObstacles.push(new Obstacle(width, 40, '#890000', randomX, 0)) // Arriba

    score++
  }
}

function drawObstacles() {
  myObstacles.forEach(obstacle => {
    obstacle.y += 1
    obstacle.draw()
  })
}

// Game Over ?
function checkGameOver() {
  // Itera sobre cada obstáculo y revisa si el jugador chocó con algún obstáculo
  let crashed = myObstacles.some(obstacle => carrito.crashWith(obstacle))

  if (crashed) {
    stop()
  }
}

function stop() {
  clearInterval(interval)
  interval = null
}




















this.x = 100
    this.y = 860
    this.width = 50
    this.height = 110
    this.color = 'transparent'
    this.img = new Image()
    this.img.src = './images/car.png'
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)