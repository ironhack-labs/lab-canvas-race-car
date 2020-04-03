var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
let intervalId
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  }
}
const road = new Image()
road.src = './images/road.png'

const backgroundImage = {
  img: road,
  y: 0,
  speed: -1,

  draw: function() {
    this.y++
    if (this.y < -canvas.width) {
      this.y = 0;
    }
    // cuando la imagen se salga del canvas
    ctx.drawImage(this.img, 0, this.y, canvas.width, canvas.height)
    ctx.drawImage(this.img, this.y +canvas.width, 0, canvas.width, canvas.height)
  }
}

class Automovil {
  constructor() {
    this.x = 100
    this.image = new Image()
    this.image.src = './images/car.png'
  }
  draw() {
    ctx.drawImage(this.image, this.x, 500, 50, 75)
  }
  moveLeft() {
    this.x -= 10
  }
  moveRight() {
    this.x += 10
  }
}
const car = new Automovil()
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      car.moveLeft()
      break
    case 39:
      car.moveRight()
      break
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  backgroundImage.draw()
  car.draw()
}

function startGame() {
  intervalId = setInterval(update, 60/1000 )
}
