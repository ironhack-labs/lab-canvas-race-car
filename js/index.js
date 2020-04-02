// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')
class GameCanvas {
  constructor() {
    this.canvas = document.querySelector('canvas')
    this.context = canvas.getContext('2d')
    this.img = new Image()
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
    this.x = 0
    this.y = 0
  }
  moveUp() {
    this.y -= 10
  }
  moveDown() {
    this.y += 10
  }
  moveLeft() {
    this.x -= 10
  }
  moveRight() {
    this.x += 10
  }
}

const gameCanvas = new GameCanvas()

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    gameCanvas.img.src = './images/road.png'
    startGame()
  }

  function startGame() {
    gameCanvas.context.clearRect(0, 0, canvas.width, canvas.height)
    gameCanvas.drawBg()
    requestAnimationFrame(startGame)
  }
}
