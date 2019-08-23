const canvas = document.querySelector('#scenario')
const ctx = canvas.getContext('2d')
let frames = 0
const obstacles = []
let interval
let newPlayer

class GameAsset {
  constructor(width, height, color, x, y, isImg = false) {
    // Vacio, por el momento
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0
    this.isImg = isImg
    if (this.isImg) {
      this.img = new Image()
      this.img.src = './images/car.png'
      this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }

  draw() {
    if (!this.isImg) {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    } else {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }
  top() {
    return this.y
  }
  bottom() {
    return this.y + this.height
  }
  left() {
    return this.x
  }
  right() {
    return this.x + this.width
  }
  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    )
  }
}

// window.onload = function () {
document.getElementById('start-button').onclick = function () {
  startGame()
}
// }

function startGame() {
  interval = setInterval(updateCanvas, 20)
  // Coordenadas x para el Carro xMin = 50, xMax = 300
  newPlayer = new GameAsset(50, 70, '', 170, canvas.height - 100, true)
}

function stop() {
  clearInterval(interval)
  interval = null
  console.log(interval)
  showGameOver()
}

document.onkeydown = e => {
  switch (e.keyCode) {
    case 37:
      if (newPlayer.x >= 70) {
        newPlayer.x -= 10
      } else {
        newPlayer.x = 50
      }
      break
    case 39:
      if (newPlayer.x < 300) {
        newPlayer.x += 10
      } else {
        newPlayer.x = 300
      }
      break
    default:
      console.log('Default')
      break
  }
}

function drawScenario() {
  clearScenario()
  // Pasto izquierdo & Derecho
  ctx.beginPath()
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 30, canvas.height)
  ctx.fillRect(canvas.width - 30, 0, canvas.width, canvas.height)
  ctx.closePath()

  // Acotamiento izquierdo & derecho
  ctx.beginPath()
  ctx.fillStyle = 'gray'
  ctx.fillRect(30, 0, 10, canvas.height)
  ctx.fillRect(canvas.width - 40, 0, 10, canvas.height)
  ctx.closePath()

  // Carretera
  ctx.beginPath()
  ctx.fillStyle = 'gray'
  ctx.fillRect(50, 0, canvas.width - 100, canvas.height)
  ctx.closePath()

  // Lineas de division
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 2
  ctx.moveTo(canvas.width / 2, 0)
  let xPos = canvas.width / 2
  let yPos = 0
  for (let i = 0; i < 30; i++) {
    ctx.beginPath()
    ctx.moveTo(xPos, yPos)
    ctx.lineTo(xPos, yPos + 20)
    ctx.stroke()
    ctx.closePath()
    yPos += 30
  }
}

function clearScenario() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function updateObstacles() {
  if (frames % 120 === 0) {
    let y = 0
    let minWidth = canvas.width * 0.035
    maxWidth = canvas.width * 0.35
    let width = Math.floor(Math.random() * (maxWidth - minWidth) + 1 + minWidth)
    let minGap = canvas.width * 0.35
    maxGap = canvas.width * 0.45
    let gap = Math.floor(Math.random() * (maxGap - minGap) + 1 + minGap)
    obstacles.push(new GameAsset(width, 20, 'red', 50, y, false))
    obstacles.push(new GameAsset(width - gap - y, 20, 'red', width + gap, y, false))
  }
}

function drawObstacles() {
  obstacles.forEach(obstacle => {
    obstacle.y += 1
    obstacle.draw()
  });
}

function checkGameOver() {
  let crashed = obstacles.some((obstacle => newPlayer.crashWith(obstacle)))
  console.log("CheckGameOver")
  if (crashed) {
    console.log('Crashed')
    stop()
  }
}

function updateCanvas() {
  frames++
  clearScenario()
  drawScenario()
  newPlayer.draw()
  drawObstacles()
  updateObstacles()
  checkGameOver()
}

function showGameOver() {
  ctx.fillStyle = 'orange'
  ctx.font = '80px Bradley Hand ITC'
  ctx.fillText('Game Over!', 20, 300)
}