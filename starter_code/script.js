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

    background = new pistaCanvas()
    car = new character ()
    background.buildBackground()
    car.drawCar()
    if (interval) return
    interval = setInterval(update, 1000 / 100)
  }
};
class pistaCanvas {
  constructor() {

  }
  buildBackground() {
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, 400, 600)//pasto
    ctx.fillStyle = 'gray'
    ctx.fillRect(20, 0, 350, 600) //carretera
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 5
    ctx.strokeRect(30, -10, 330, 620) //limite lineas
    ctx.beginPath()
    ctx.moveTo(200, 0)
    ctx.save()
    ctx.setLineDash([50,15])//carril div
    ctx.lineTo(200, 600)
    ctx.stroke()
    ctx.restore()
    ctx.closePath()
  }
}

class character {
  constructor() {

    this.x = 175  //car pos
    this.width = 60
    this.heigth = 85
    this.img = new Image()
    this.img.src = '../starter_code/images/car.png'
    this.img.onload = () => {
      this.drawCar()
    }
  }
  drawCar() {
    ctx.drawImage(this.img, this.x, 500, this.width, this.heigth)
  }
  movRigth() {
    if (this.x <= 335) this.x += 15 //mov
  }
  movLeft() {
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
  constructor(x) {
    this.x = x
    this.y = -50
    this.width = 100
    this.heigth = 45
  }
  drawObstacle() {
    this.moveObstacle()
    ctx.fillStyle = 'orange'
    ctx.fillRect(this.x, this.y, this.width, this.heigth)
  }
  moveObstacle() {
    this.y ++
  }

}

function generateObstacles() {
  if (frames % 100 === 0) {
    obstacles.push(new Obstacle(Math.floor(Math.random() * 400) - 50))
  }
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
 }
document.onkeydown = (e) => { 
  if (e.keyCode === 39) return car.movRigth()
  if (e.keyCode === 37) return car.movLeft()
}

function cheCollition() {}
  


