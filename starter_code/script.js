//Variables Globales
var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var width = canvas.width
var height = canvas.height
var img = new Image()
img.src = "images/car.png"
var carX = 185
var carY = 490

var interval = setInterval(drawEverything, 10)
var frameCounter = 0
var pointsCounter = 0
var highScores = []
var obstacleArray = []

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

function startGame() {
    drawEverything()
  }
};


function drawEverything() {
  clearCanvas()
  drawRoad()
  drawCar(carX, carY)
  frameCounter++
  pointsCounter += 0.1

  if (frameCounter % 120 === 0) {
    obstWidth = Math.floor(Math.random() * (130 - 80 + 1)) + 80
    obstXMax = width - (obstWidth + 45)
    obstX = Math.floor(Math.random() * (obstXMax - 45 + 1)) + 45
    obstacleArray.push(new Obstacle(obstWidth, 30, obstX, 0))

  }
  for (var i = 0; i < obstacleArray.length; i++) {
    obstacleArray[i].y += 1
    obstacleArray[i].draw()
  }
  console.log('points: ' + Math.floor(pointsCounter))
  drawPoints()
}

function clearCanvas() {
  ctx.fillRect(0, 0, width, height)
}

function stopGame() {
  clearInterval(interval)
  gameOver()
}

function gameOver() {
  ctx.fillStyle = "black"
  ctx.fillRect(0, 200, width, 200)
  ctx.fillStyle = "white"
  ctx.fillText(`Game over!`, 65, 280)
  ctx.fillText(`Time:    ${Math.floor(pointsCounter)}`, 65, 320)
  ctx.font = "20px sans-serif"
  console.log('Game over!')
}

function drawPoints() {
  ctx.fillStyle = ""
  ctx.fillText(`Time: ${Math.floor(pointsCounter)}`, 65, 30)
  ctx.font = "20px sans-serif"
}



function drawRoad() {
  ctx.fillStyle = "grey"
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = "green"
  ctx.fillRect(0, 0, 15, height)
  ctx.fillRect(665, 0, 15, height)
  ctx.fillStyle = "white"
  ctx.clearRect(25, 0, 10, height)
  ctx.clearRect(645, 0, 10, height)
  ctx.fillRect(397, 5, 5, 25)
  ctx.fillRect(397, 45, 5, 25)
  ctx.fillRect(397, 85, 5, 25)
  ctx.fillRect(397, 125, 5, 25)
  ctx.fillRect(397, 165, 5, 25)
  ctx.fillRect(397, 205, 5, 25)
  ctx.fillRect(397, 250, 5, 25)
  ctx.fillRect(397, 290, 5, 25)
  ctx.fillRect(397, 330, 5, 25)
  ctx.fillRect(397, 370, 5, 25)
  ctx.fillRect(397, 410, 5, 25)
  ctx.fillRect(397, 450, 5, 25)
  ctx.fillRect(397, 490, 5, 25)
  ctx.fillRect(397, 530, 5, 25)
  ctx.fillRect(397, 570, 5, 25)
  ctx.fillRect(397, 610, 5, 25)
  ctx.fillRect(397, 650, 5, 25)
  ctx.fillRect(397, 690, 5, 25)
  ctx.fillRect(397, 730, 5, 25)
  ctx.fillRect(397, 770, 5, 25)
}

function drawCar(carX, carY) {
  ctx.drawImage(img, 350, carY, 50, 110)
}


document.onkeydown = function (e) {
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


class Obstacle {
  constructor(width, height, x, y) {
    this.width = width
    this.height = height
    this.color = 'peru'
    this.x = x
    this.y = y
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)

  }
  newObstaclePos() {

  }
}