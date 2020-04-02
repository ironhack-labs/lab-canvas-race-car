// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')
class GameCanvas {
  constructor() {
    this.canvas = document.querySelector('canvas')
    this.context = canvas.getContext('2d')
    this.img = new Image()
    this.img.src = './images/road.png'
    this.y = 0
  }

  drawBg() {
    this.y++
    if (this.y > this.canvas.height) this.y = 0
    this.context.drawImage(this.img, 0, this.y, this.canvas.width, this.canvas.height)
    this.context.drawImage(
      this.img,
      0,
      this.y - this.canvas.height,
      this.canvas.width,
      this.canvas.height
    )
  }
}

class Car {
  constructor() {
    this.x = 225
    this.y = 590
    this.img = new Image()
    this.img.src = './images/car.png'
    this.width = 50
    this.height = 100
  }
  draw(context) {
    context.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveUp() {
    this.y -= 40
  }
  moveDown() {
    this.y += 40
  }
  moveLeft() {
    this.x -= 40
  }
  moveRight() {
    this.x += 40
  }
}

// class Obstacle {
//   constructor(context) {
//     this.context = context
//     this.width = Math.floor(Math.random() * 100)
//     this.height = 20
//     this.x = Math.floor(Math.random() * 150)
//     this.y = 0
//     this.obstacles = [{}]
//     this.score = 0
//   }

//   drawObstacles() {
//     this.y++
//     if (this.y > 700) return this.score++
//     this.context.fillStyle = 'red'
//     this.context.fillRect(this.x, this.y, this.width, this.height)
//     // requestAnimationFrame(drawObstacles)
//   }
// }

const gameCanvas = new GameCanvas()
const car = new Car()
// const obstacle = new Obstacle(gameCanvas.context)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  }

  let obstacles = [{ width: 30, height: 30, x: gameCanvas.width, y: gameCanvas.height }]
  let frame = 0

  function startGame() {
    gameCanvas.context.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
    gameCanvas.drawBg()
    car.draw(gameCanvas.context)
    if (frame % 100 == 0) frame++
    obstacles.push({
      width: 30,
      height: 30,
      x: gameCanvas.width * Math.random(),
      y: gameCanvas.height
    })
    obstacles.forEach(o => {
      o.y += 1
      gameCanvas.context.fillRect(o.x, o.y, o.width, o.height)
    })
    requestAnimationFrame(startGame)
  }
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      car.moveUp()
      break
    case 40:
      car.moveDown()
      break
    case 37:
      car.moveLeft()
      break
    case 39:
      car.moveRight()
      break
  }
}
