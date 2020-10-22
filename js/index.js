const $canvas = document.querySelector('canvas')
const ctx = $canvas.getContext('2d')
let gameInterval
const $startButton = document.getElementById('start-button')

class Board{
  constructor(){
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.height = $canvas.height
    this.img = new Image()
    this.img.src = './images/road.png'
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

class Car{
  constructor(x){
    this.x = x
    this.y = $canvas.height - 200
    this.width = 65
    this.height = 100
    this.img = new Image()
    this.img.src = './images/car.png'
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)  
  }
  move(dir) {
    switch (dir){
      case "L":
        if (this.x <= 75) return
        return this.x -= 10
      case "R":
        if (this.x >= $canvas.width - 140) return
        return this.x +=10
      default:
        throw new Error('Invalid direction')
    }
  }

}

class Obstacle {
  constructor (x, width) {
    this.x = x
    this.y = $canvas.height
    this.width = width
    this.height = 10
  }
  draw() {
    this.y--
    ctx.fillStyle = "red"
    ctx.fillRect (this.x, this.y, this.width, this.height)
  }
}


const Board1 = new Board();
const Car1 = new Car(217.5);

function updateGame(){
  clearCanvas()
  Board1.draw()
  Car1.draw()
}

function clearCanvas(){
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

window.onload = () => {
  // document.getElementById('start-button').onclick = () => {
  //   startGame();
  // };
  
  $startButton.addEventListener('click', startGame)}

  function startGame() {
    if (gameInterval) return
    gameInterval = setInterval(updateGame, 1000/60)
  }

function generateObstacles() {
  const min = 100
  const max = $canvas.width - 100
  const randomWidth = Math.floor(Math.random() * (max - min))
}

document.onkeydown = e => {
  switch (e.key) {
    case "ArrowLeft":
      return Car1.move("L")
    case "ArrowRight":
      return Car1.move("R")
    default:
      break
  }
}