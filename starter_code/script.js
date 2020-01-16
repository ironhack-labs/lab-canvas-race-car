let interval = 0
let frames = 0
let background
let car
let ctx = document.querySelector('canvas').getContext('2d')


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    background = new RaceCanvas()
    car = new Car()
    background.buildBackground()
    car.drawCar()
    if (interval) return
    interval = setInterval(update, 1000 / 500)
  }
};

class RaceCanvas {
  constructor() {
    
  }
  buildBackground() {
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, 400, 600)
    ctx.fillStyle = 'gray'
    ctx.fillRect(50, 0, 300, 600)
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 5
    ctx.strokeRect(70, -10, 260, 620)
    ctx.beginPath()
    ctx.moveTo(200, 0)
    ctx.save()
    ctx.setLineDash([15,15])
    ctx.lineTo(200, 600)
    ctx.stroke()
    ctx.restore()
    ctx.closePath()
  }
}

class Car {
  constructor() {
    
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
    ctx.drawImage(this.img, this.x, 500, this.width, this.heigth)
  }
  moveRigth() {
    if (this.x <= 343) this.x += 7
  }
  moveLeft() {
    if (this.x >= 7) this.x -= 7
  }
  
}

class Obstacle {
  constructor() {
    this.x = Math.floor(Math.random() * 400) - 50
    this.y = -30
    this.width = 100
    this.heigth = 30
  }
  drawObstacle() {
    ctx.fillRect(this.x, this.y, this.width, this.heigth)
  }
  moveObstacle() {
    
  }
}

function update() {
  frames++
  ctx.clearRect(0, 0, 400, 600)
  background.buildBackground()
  car.drawCar()
  //drawObstacles()
  //checkCollitions()
  //ctx.fillText(String(score), canvas.width - 100, 100)
}

document.onkeydown = (e) => { 
  if (e.keyCode === 39) return car.moveRigth()
  if (e.keyCode === 37) return car.moveLeft()
}

