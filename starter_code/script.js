const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let myObstacles = []
let interval


window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    start();
  };


  //  FLAPPY PROJECT
  class Component {
    constructor(width, height, color, x, y) {
      this.width = width
      this.height = height
      this.color = color
      this.x = x
      this.y = y
      this.speedX = 0
      this.speedY = 0
    }

    drawCar() {
      // ctx.fillStyle = this.color
      // ctx.fillRect(this.x, this.y, this.width, this.height)
      //ctx.clearRect(0, 0, canvas.width, canvas.height)
      let carImg = document.getElementById('car-img')
      // let x = 0
      // let y = 0
      ctx.drawImage(carImg, this.x, this.y, 40, 80)
    }

    drawObstacle() {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    newPos() {
      this.x += this.speedX
      if (this.x < 0) {
        this.x = 0
      }
      if (this.x > 410) {
        this.x = 410
      }
    }

    left() {
      return this.x
    }

    right() {
      return this.x + this.width
    }
    top() {
      return this.y
    }
    bottom() {
      return this.y + this.height
    }
    crashWith(obstacle) {
      return !(this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right())
    }
  }

  //let player = new Component(30, 30, 'cornflowerblue', 0, 110)

  let car = new Component(40, 80, 'white', 200, 550)



  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let backgroundImg = document.getElementById('background-img')
    let x = 0
    let y = 0
    ctx.drawImage(backgroundImg, x, y, 450, 650)
  }

  function writeGameOver() {

    ctx.fillStyle = "red"
    ctx.font = "75px Arial"
    let textMessage = `Game Over!`
    ctx.fillText(textMessage, 20, 360)
  }

  function updateCanvas() {
    frames++
    clearCanvas()
    car.newPos()
    car.drawCar()
    drawObstacles()
    updateObstacles()
    writeScore()
    checkGameOver()
  }

  function start() {
    interval = setInterval(updateCanvas, 10)
  }

  function stop() {
    clearInterval(interval)
    interval = null
    writeGameOver()
  }

  function writeScore() {
    ctx.fillStyle = "white"
    ctx.font = "30px Arial"
    let score = (Math.floor((frames / 200)) - 3)
    if (score < 0) {
      score = 0

    }
    ctx.fillText(`Score: ${score}`, 60, 35)

  }

  function updateObstacles() {
    if (frames % 200 === 0) {
      let minWidth = canvas.width * 0.15
      let maxWidth = canvas.width * 0.6
      let randomVal1 = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth * 2)
      let randomVal2 = Math.floor(Math.random() * (maxWidth - minWidth + 1))
      myObstacles.push(new Component(randomVal1, 20, 'indianred', randomVal2, 0))
    }
  }

  function drawObstacles() {
    myObstacles.forEach(obstacles => {
      obstacles.y++
      obstacles.drawObstacle()
    })
  }

  document.onkeydown = e => {
    switch (e.keyCode) {
      case 37: // left arrow
        car.speedX -= 1.5;
        break;
      case 39: // right arrow
        car.speedX += 1.5;
        break;
      case 32:
        if (interval) break
        start()
        break
      case 81:
        stop()
        break
      default:
        break
    }
  }

  function checkGameOver() {
    var crashed = myObstacles.some(function (obstacle) {
      return car.crashWith(obstacle)
    })

    if (crashed) {
      stop()
    }
  }

  document.onkeyup = e => {
    car.speedX = 0
    car.speedY = 0
  }
}

