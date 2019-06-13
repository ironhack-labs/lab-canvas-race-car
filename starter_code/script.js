const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let interval
let obstacles = []
let frames=0
let valore

class Score {
  constructor() {
    this.x = 50
    this.y = 650
    this.height = 20
    this.width = 50
    this.scores=0
  }
  draw() {
    ctx.fillStyle = "white"
    ctx.fillText(`Score : ${this.scores}`,this.x, this.y, this.width)
  }
}

class Pista {
  constructor() {
    this.x = 0
    this.y = 0
    this.height= canvas.height
    this.width= canvas.width
    this.img= new Image()
    this.img.src = './images/pista.png'
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

class Carito {
  constructor() {
    this.x = 125
    this.y = 600
    this.height = 70
    this.width = 35
    this.img = new Image()
    this.img.src = './images/car.png'

  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveRight() {
    if (this.x > canvas.width - this.width - 40) return
    this.x+= 10
  }
  moveLeft() {
    if (this.x < canvas.width - this.width - 230) return
    this.x-= 10
  }

  isTouching(obstacles) {
    return (
      this.x < obstacles.x + obstacles.width &&
      this.x + this.width > obstacles.x &&
      this.y < obstacles.y + obstacles.height &&
      this.y + this.height > obstacles.y
    )
  }
}

class Obstacle {
  constructor(x,w) {
    this.x = x
    this.y = 0
    this.width= w
    this.height = 15
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, 15)
    this.y++
  }
}

const pista = new Pista ()
const carrito = new Carito ()
const marcador = new Score()


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  

  function startGame() {
    if(interval) return
    interval = setInterval(update,1000/120 );
  }
};
function valorx(){
  let valor = Math.floor(Math.random() * 175)
  if ( valor < 20){
      valorx()
  }
  return valor
}
function widthX(){
  valore = Math.floor(Math.random() * 145)
  if (valore > 125){
     return valore
  }
  return 125
}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  pista.draw()
  carrito.draw()
  drawObstacles()
  checkCollition()
  let puntos=sumaMarcador()
  marcador.scores=puntos
  marcador.draw()
}
function sumaMarcador(){
  let valor = 0
  for ( let i =0 ; i<obstacles.length;i++){
    if(obstacles[i].y>700){
      valor++
    }
  }
  return valor
}
function generateObstacles() {
  obstacles.push(new Obstacle (valorx(),widthX()))
}

function drawObstacles() {
  if (frames % 300 === 0) {
    generateObstacles()    
  }
  obstacles.forEach(obstacle => {
    obstacle.draw()
  })
}

function checkCollition() {
  obstacles.map(obstacle => {
    if (carrito.isTouching(obstacle)) {
      gameOver()
    }
  })
}

function gameOver() {
  clearInterval(interval)
  interval = false
}

addEventListener('keydown', (e) => {
 if(e.keyCode === 39) {
   carrito.moveRight()
  } else if(e.keyCode === 37) {
    carrito.moveLeft()
  }
})
