const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let interval
let myObstacles = []
let score = 0
var botonInicio = document.getElementById('start-button');
botonInicio.onclick=start
console.log(botonInicio)

class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
  }
  draw(){
    ctx.beginPath();
    //da el color al làpiz
    ctx.fillStyle = 'gray'
    //dibujas un relleno
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.stroke()
    ctx.closePath()

    //empezar el camino
    ctx.beginPath();
    //da el color al làpiz
    ctx.fillStyle = 'green'
    //dibujas un relleno
    ctx.fillRect(0, 0, 40, canvas.height)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath();
    //da el color al làpiz
    ctx.fillStyle = 'green'
    //dibujas un relleno
    ctx.fillRect(canvas.width - 40, 0, 40, canvas.height)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath();
    //da el color al làpiz
    ctx.fillStyle = 'white'
    //dibujas un relleno
    ctx.fillRect(60, 0, 20, canvas.height)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath();
    //da el color al làpiz
    ctx.fillStyle = 'white'
    //dibujas un relleno
    ctx.fillRect(canvas.width - 80, 0, 20, canvas.height)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath();
    //da el color al làpiz
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 10
    ctx.setLineDash([20])
    ctx.rect(canvas.width / 2, -10, 1000, canvas.height * 2)
    ctx.stroke()
    ctx.closePath()
  }
}

class Carrito {
    constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 75
    this.img = new Image()
    this.img.src = './images/car.png'
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
    moveRight() {
    this.x += 20
  }
   moveLeft() {
    this.x -= 20
  }
  isTouching(obstacle) {
      return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}

//obstacle
class Obstacle {
  constructor(x, y, width, height, type) {
    this.width = width
    this.height = height
    this.type = type
    this.x = x
    this.y = y
  }
  draw() {
    this.y++
    ctx.fillStyle = "#560B0B"
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.stroke()
  }
}


const carrito = new Carrito(230, 500)
const board = new Board()

function drawScore(){
  if (frames % 200 === 0) {
    score += 1
  }
  ctx.font = '30px Impact'
  ctx.fillText(`Score: ${score}`, canvas.width / 2 + 20, 50)
}

function generateObstacles() {
  const min = 200
  const max = 500
  const maxC = canvas.width
  const minC = 40
  if (frames % 200 === 0) {
    const randomWidth = Math.floor(Math.random() * (max - min))
    const randomX = Math.floor(Math.random() * (maxC - minC))
    myObstacles.push(new Obstacle(randomX, 1, randomWidth, 30, true))
  }
}

function drawObstacles() {
  myObstacles.forEach(obstacle => {
    obstacle.draw()
  })
}


function iniciaEscenario(){
   board.draw()
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  generateObstacles()
  board.draw()
  drawObstacles()
  checkCollition()
  drawScore()
  carrito.draw()
}

function gameOver() {
  ctx.font = '30px Courier'
  ctx.fillText('Game Over "F" try again', canvas.width / 2 - 200, 200)
  clearInterval(interval)
}

function checkCollition() {
  myObstacles.forEach(myObstacles => {
    if (carrito.isTouching(myObstacles)) return gameOver()
  })
}

function restart() {
  if (true) {
    location.reload()
  }
}

document.onkeydown = e => {
  switch (e.keyCode) {
    case 37:
      carrito.moveLeft()
      break
    case 39:
      carrito.moveRight()
      break
    case 70:
      restart()
      break

    default:
      break
  }
}

iniciaEscenario()

function start() {
  interval = setInterval(update, 1000 / 60)
}


