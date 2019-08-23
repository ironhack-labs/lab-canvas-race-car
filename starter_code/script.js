const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
let frames = 0
const obstaclesRace = []
let interval
let score = 0

class Racer {
  constructor(x, y, width, height) {
    this.width =  width
    this.height = height
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = './images/car.png'
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    this.speedX = 0
  }

  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  newPos(){
    this.x += this.speedX
  }

  top(){
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
  crashWith(obstacle){
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    )
  }
}

class Obstaculos {
  constructor(width, height, color, x, y){
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y
  }
  draw(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  top(){
    return this.y
  }

  bottom() {
    return this.y += this.height
  }
  
  left() {
    return this.x
  }

  right() {
    return this.x + this.width
  }
  
}

document.getElementById("start-button").onclick = function () {
  startGame();
  console.log('si')
};

const carrito = new Racer(100, 860, 50, 110) 

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function updateCanvas() {
  frames += 1
  clearCanvas()
  carrito.newPos()
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

function startGame() {
  carrito.draw()
  carrito.y = 640
  interval = setInterval(updateCanvas, 20)
}
function stopGame() {
  clearInterval(interval)
  interval = null
}

function checkGameOver() {
  let crashed = obstaclesRace.some(obstacle=>carrito.crashWith(obstacle))
  if(crashed) {
    stopGame()
  }
}

document.onkeydown = e => {
  switch (e.keyCode) {
    //izquierda
    case 37:
      carrito.speedX -= 1
      break;

      //derecha
    case 39:
      carrito.speedX += 1
      break;

      //el espacio es para iniciar
    case 32:
      if (interval) break
      startGame()
      break;

    default:
      break;

  }
}

function updateObstacles() {
  if (frames % 200 === 0){
    let y = 0
    let minWidth = 2 * carrito.width
    let maxWidth = 250
    let width = Math.floor(Math.random() * (maxWidth - minWidth)) + 200
    let randum = Math.floor(Math.random() * (canvas.width))

    obstaclesRace.push(new Obstaculos(width, 20, 'tomato', randum, 0))
    
    score++
  }
}

function drawObstacles(){
  obstaclesRace.forEach(obstacle => {
    obstacle.y += 1
    obstacle.draw()
  })
}

document.onkeyup = e => {
  carrito.speedX = 0
}


