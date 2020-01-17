let interval = 0
let frames = 0
let background
let car
let ctx = document.querySelector('canvas').getContext('2d')
let obstacles = []


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
    interval = setInterval(update, 1000 / 100)
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
    if (this.x <= 335) this.x += 15
  }
  moveLeft() {
    if (this.x >= 15) this.x -= 15
  }
  isTouching(obstacle) {
    console.log('si entra')
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
  
}

class Obstacle {
  constructor(x, speed) {
    this.x = x
    this.y = -30
    this.width = 120
    this.heigth = 30
    this.speed = speed
  }
  drawObstacle() {
    this.moveObstacle()
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.heigth)
  }
  moveObstacle() {
    this.y += this.speed
  }

}

function generateObstacles() {
  if (frames % 200 === 0) {
    obstacles.push(new Obstacle(Math.floor(Math.random() * 400) - 50, Math.ceil(Math.random() * 2)))
  }
}

function checkCollitions() {
  obstacles.forEach((obstacle, idx) => {
    if (car.isTouching(obstacle)) {
      console.log('consolaaaa')
      //if (obstacle.img.src === imgs.taco) score += 10
      //else score -= 20
      return obstacles.splice(idx, 1)
    }
  })
}

function update() {
  frames++
  ctx.clearRect(0, 0, 400, 600)
  background.buildBackground()
  car.drawCar()
  generateObstacles()
  obstacles.forEach((obstacle => {
    obstacle.drawObstacle()
  }))
  checkCollitions()
  //ctx.fillText(String(score), canvas.width - 100, 100)
}

document.onkeydown = (e) => { 
  if (e.keyCode === 39) return car.moveRigth()
  if (e.keyCode === 37) return car.moveLeft()
}

