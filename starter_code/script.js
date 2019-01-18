// GLOBAL VARIABLES
var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var width = canvas.width // variables to easily refer to the width and height of the canvas
var height = canvas.height
var img = new Image()
var carX = 175
var carY = 560
img.src = "images/car.png"
var interval = setInterval(drawEverything, 20)
var frameCounter = 0
var obstacleArray = []
var pointsCounter = 0
var highScores = []

// FUNCTIONS ON LOAD
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  function startGame() {
    drawEverything()
  }
};

// OBSTACLES CLASS
class Obstacle {
  constructor(width, height, x, y) {
    this.width = width
    this.height = height
    this.color = 'maroon'
    this.x = x
    this.y = y
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
    // draw the obstacle with ctx.fillRect and passed paramters and declared variables
  }
  newObstaclePos () {
    // generate new coordinates for every frame using xy and speeds
  }
}

// DRAW UPDATED ELEMENTS
function drawEverything() {
  clearCanvas()
  drawRoad()
  drawCar(carX, carY)
  frameCounter++
  pointsCounter += 0.1
  // console.log(frameCounter)
  if (frameCounter % 220 === 0) {
    obstWidth = Math.floor(Math.random() * (130-80 +1)) + 80
    obstXMax = width - (obstWidth + 45)
    obstX = Math.floor(Math.random() * (obstXMax-45 +1)) + 45
    obstacleArray.push(new Obstacle(obstWidth,30,obstX,0))
    // console.log(obstacleArray)
  }
  for (var i=0; i < obstacleArray.length; i++) {
    obstacleArray[i].y += 1
    obstacleArray[i].draw()
  }
  console.log('points: ' + Math.floor(pointsCounter))
  drawPoints()
}

// FUNCTIONS
function stopGame() {
  clearInterval(interval)
  gameOver()
}

function gameOver() {
  ctx.fillStyle = "black"
  ctx. fillRect(0,200,width,200)
  ctx.fillStyle = "white"
  ctx.fillText(`Game over!`, 65, 280)
  ctx.fillText(`Points:    ${Math.floor(pointsCounter)}`, 65, 320)
  ctx.font = "20px sans-serif"
  console.log('Game over!')
}

function drawPoints() {
  ctx.fillStyle = ""
  ctx.fillText(`Points: ${Math.floor(pointsCounter)}`, 65, 30)
  ctx.font = "20px sans-serif"
}

function clearCanvas() {
  ctx.fillRect(0,0,width,height)
}

function drawRoad() {
  ctx.fillStyle = "grey"
  ctx.fillRect(0,0,width,height)
  ctx.fillStyle = "green"
  ctx.fillRect(0,0,35,height)
  ctx.fillRect(365,0,35,height)
  ctx.fillStyle = "white"
  ctx.clearRect(45,0,10,height)
  ctx.clearRect(345,0,10,height)
  ctx.fillRect(197,5,5,25)
  ctx.fillRect(197,45,5,25)
  ctx.fillRect(197,85,5,25)
  ctx.fillRect(197,125,5,25)
  ctx.fillRect(197,165,5,25)
  ctx.fillRect(197,205,5,25)
  ctx.fillRect(197,250,5,25)
  ctx.fillRect(197,290,5,25)
  ctx.fillRect(197,330,5,25)
  ctx.fillRect(197,370,5,25)
  ctx.fillRect(197,410,5,25)
  ctx.fillRect(197,450,5,25)
  ctx.fillRect(197,490,5,25)
  ctx.fillRect(197,530,5,25)
  ctx.fillRect(197,570,5,25)
  ctx.fillRect(197,610,5,25)
  ctx.fillRect(197,650,5,25)
  ctx.fillRect(197,690,5,25)
  ctx.fillRect(197,730,5,25)
  ctx.fillRect(197,770,5,25)
} // DEBUG make with for loop

function drawCar(carX, carY) {
  ctx.drawImage(img,carX,carY,50,110)
}

// USER INPUTS
document.onkeydown = function(e) {
  e.preventDefault()
  switch (e.keyCode) {
    case 37: 
    carX -= 18
    break;
    case 39: 
    carX += 18
    break;
  }
}


// TODO
// Obstacles and collisions
// Speed and keydown stuff
// For loop for drawing lines