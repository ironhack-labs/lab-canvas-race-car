// @ts-nocheck
const body = document.querySelector("body")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let gameFrames = 0
let speed = 2
let requestId
let score = 0
let frameDiv = 180

const obstacles = []

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

window.onload = () => {
  body.style.display = "flex"
  body.style.flexDirection = "column"
  body.style.justifyContent = "center"
  body.style.alignItems = "center"
  canvas.style.display = 'none'
  
  document.getElementById('start-button').onclick = () => {  
    startGame()
  }
}

function startGame() {
  document.querySelector(".game-intro").style.display = "none"
  if (!requestId) requestId = requestAnimationFrame(gameEngine)
}

function gameEngine() {
  canvas.style.display = ""
  gameFrames++
  // console.log(gameFrames)

  const score0 = score
  clearCanvas()
  road.draw()
  obstacleGenerator()
  drawObstacles()
  raceCar.draw()
  
  scoring()
  checkCrash()
  if (score0 < score) {
    speed += 0.2
    frameDiv -= 1
    obstacles.forEach(obstacle => obstacle.speed = speed)
    road.speed = speed
  }

  if (requestId) requestAnimationFrame(gameEngine)
}

function obstacleGenerator() {
  if (gameFrames % frameDiv === 0) {
    const randomWidth = Math.floor(Math.random() * (canvas.width / 3) + 60)
    const randomPosition = Math.floor(Math.random() * (canvas.width - randomWidth))
    
    const obstacle = new Obstacle()
    obstacle.x = randomPosition
    obstacle.width = randomWidth
    
    obstacles.push(obstacle)
  }
}
function drawObstacles() {
  obstacles.forEach((obstacle, i) => {
    if (obstacle.y - obstacle.height >= canvas.height) {
      obstacles.splice(i, 1)
      score++
      } else {
      obstacle.draw()
    }
  })
}

function checkCrash() {
  obstacles.forEach((obstacle, i) => {
    if (raceCar.hasCrashed(obstacle)) {
      requestId = cancelAnimationFrame(gameEngine)
      console.log('crash!')
    }

    if (!requestId) { 
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "red"
      ctx.font = '80px Arial'
      ctx.fillText('GAME OVER', 5, canvas.height / 2)
      ctx.fillStyle = "white"
      ctx.font = "40px Arial"
      ctx.fillText(`Final score: ${score}`, 140, canvas.height / 2 + 50)
    }
  })
}

function scoring() {
  ctx.font = '20px Arial'
  ctx.fillStyle = 'white'
  ctx.fillText(`Score: ${score}`, 80, 30)
}