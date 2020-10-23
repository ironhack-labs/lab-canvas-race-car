const $canvas = document.querySelector('canvas')
const ctx = $canvas.getContext('2d')
let gameInterval
let frames = 0;
const $startButton = document.getElementById('start-button')
let obstacles = []
let score = 0;

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
    if(this.y >$canvas.height) this.y = 0
    this.y++
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x , this.y- $canvas.height, this.width, this.height)
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
      case 'L':
        if (this.x <= 75) return
         this.x -= 20
         break;
      case 'R':
        if (this.x >= $canvas.width - 140) return
         this.x +=20
         break;
      default:
        throw new Error('Invalid direction')
    }
  }
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
}
}
class Obstacle {
  constructor (x, width) {
    this.x = x
    this.y = 0
    this.width = width
    this.height = 10
  }
  draw() {
    console.log('draw')
		ctx.fillStyle = 'crimson';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.y++
  }
}

function generateObstacles() {
  console.log('generateObstacles')
  if (frames % 200 === 0) {
    console.log('a')
    const min = 100
    const max = $canvas.width - 100
    const randomWidth = Math.floor(Math.random() * (max - min))
    const randomX = Math.floor(Math.random() * (max - min))
    obstacles.push(new Obstacle(randomX, randomWidth))
  }
}

function drawObstacles() {
  obstacles.forEach(obs => obs.draw())
}

const Board1 = new Board();
const Car1 = new Car(217.5);

function updateGame(){
  frames++
  clearObstacles()
  generateObstacles()
  clearCanvas()
  Board1.draw()
  drawObstacles()
  Car1.draw()
  checkCollitions()
  printScore() 
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

function clearObstacles() {
  obstacles = obstacles.filter(obs => obs.y < $canvas.height)
}

function checkCollitions() {
  obstacles.forEach(obs => {
    if (Car1.isTouching(obs)) {
      alert("Game Over")
    }
  })
}

function printScore() {
  if (frames % 200 === 0 && frames > 560) score++
  ctx.font = "20px Sans-serif"
  ctx.fillStyle = "black"
  ctx.fillText(`Score: ${score}`, $canvas.width - 100, 30)
}

document.onkeydown = e => {
  switch (e.key) {
    case 'ArrowLeft':
      return Car1.move('L')
    case 'ArrowRight':
      return Car1.move('R')
    default:
      break
  }
}