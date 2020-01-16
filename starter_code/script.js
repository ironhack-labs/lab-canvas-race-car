let interval = 0
let frames = 0
let background
let car


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    const ctx = document.querySelector('canvas').getContext('2d')
    startGame();
  };

  function startGame() {
    background = new RaceCanvas()
    car = new Car()
    background.buildBackground()
    car.drawCar()
  }
};

class RaceCanvas {
  constructor() {
    this.ctx = document.querySelector('canvas').getContext('2d')
  }
  buildBackground() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 400, 600)
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(50, 0, 300, 600)
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 5
    this.ctx.strokeRect(70, -10, 260, 620)
    this.ctx.beginPath()
    this.ctx.moveTo(200, 0)
    this.ctx.setLineDash([15,15])
    this.ctx.lineTo(200, 600)
    this.ctx.stroke()
    this.ctx.closePath()
  }
}

class Car {
  constructor() {
    this.ctx = document.querySelector('canvas').getContext('2d')
    this.x = 175 
    this.width = 50
    this.heigth = 70
    this.img = new Image()
    this.img.src = './images/car.png'
    this.img.onload = () => {
      this.drawCar()
    }
  }
  drawCar() {
    this.ctx.drawImage(this.img, this.x, 500, this.width, this.heigth)
  }
  moveRigth() {
    this.x++
  }
  moveLeft() {
    this.x--
  }
  
}

function update() {
  frames++
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  background.draw()
  car.drawCar()
  //drawObstacles()
  //checkCollitions()
  //ctx.fillText(String(score), canvas.width - 100, 100)
}

document.onkeydown = (e) => { 
  if (e.keyCode === 39) return car.moveRigth()
  if (e.keyCode === 37) return car.moveLeft()
}

