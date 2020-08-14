// Delcaracion de $canvas y de ctx para manipular el lienzo
const $canvas = document.getElementById('canvas')
const ctx = $canvas.getContext('2d')
// Declaración de variables y constantes globales
let intervalId,
  frames = 0,
  obstacles = [],
  score = 0
// Función para cargar imágenes
function imageLoader(imgName, source){
  imgName = new Image()
  imgName.src = source
  return imgName
}
// Cargar las imágenes y guardadrlas en una variable
let roadImg = imageLoader("road", 'images/road.png')
let carImg = imageLoader("car", 'images/car.png')
// Clase Car para manupular todo lo relacionado con el coche
class Car{
  constructor(img, x, y){
    this.img = img
    this.x = x
    this.y = y
    this.height = 100
    this.width = 50
    this.speedX = 0
  }
  moveCar(){
    console.log(this.x)
      this.x += this.speedX
  }

  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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

class Obstacle{
  constructor(x, y, width){
    this.x = x
    this.y = y
    this.width = width
    this.height = 30
  }
}

const p1 = new Car(carImg, $canvas.width/2 - 25, 550)

function update(){
  // Increment frames
  frames++
  // Clear canvas
  clearCanvas()
  // Generate Obstacles
  GenerateObstacles()
  // Check boundaries
  checkBoundaries()
  // Check collisions
  checkCollision()
  // Draw obstacles
  drawObstacles()
  // Draw Player 1
  p1.draw()
  // Move Player 1
  p1.moveCar()
  // Imprimer score
  printScore()
  
}

function clearCanvas(){
  ctx.drawImage(roadImg, 0, 0, $canvas.width, $canvas.height)
}


// Poner el activeListener para kaycode down y afectar speedX y speedY
document.addEventListener("keydown",  e => {
  switch (e.keyCode){
    case 37: //left arrow
    p1.speedX -= 1
    break
    case 39: //right arrow
    p1.speedX += 1
    break
  }
})

// Poner el event listener para keyup y afectar speedX y speedY
document.addEventListener("keyup", e => {
  p1.speedX = 0
})

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
  
  function startGame() {
    // Set interval
    if(intervalId != 0) intervalId = setInterval(update, 1000/60)

  }
};

function GenerateObstacles(){
  if (frames%200 === 0){
    let minX = 40
    let maxX = 240
    let maxWidth = 300
    let minWidth = 40
    let xPos = Math.floor(Math.random()*(maxX - minX + 1) + minX)
    if(xPos > 250){
      maxWidth = 40
    }
    let randomWidth = Math.floor(Math.random()*(maxWidth - minWidth + 1) + minWidth)
    obstacles.push(new Obstacle(xPos, 0, randomWidth))
  }
  // road width range 30 al 380
}

function drawObstacles(){
  obstacles.forEach(el => {
    el.y+=2
    ctx.fillStyle = "red"
    console.log(el.x)
    ctx.fillRect(el.x, el.y, el.width, el.height)
  })
}

function checkCollision(){
  obstacles.forEach(obstacle => {
    if(p1.isTouching(obstacle)){
      clearInterval(intervalId)
      gameOver()
    }
  })
}

function printScore(){
  ctx.fillStyle = "black"
  ctx.font = "30px Sans Serif"
  if (frames % 100 === 0) score++
  ctx.fillText(`Score: ${score}`, 50, 50)
}

function gameOver(){
  ctx.fillStyle = "crimson"
  ctx.font = "40px Sans Serif"
  ctx.fillText("Game Over", 150, 400)
}

// Check if car has stepped out of boundaries

function checkBoundaries(){
  if(p1.x < 30 || p1.x + p1.width > 480){
    clearInterval(intervalId)
    gameOver()
  }
}