let gameApp = {
  name: 'Canvas Island Racer',
  author: 'Elvira Ramírez',
  license: undefined,
  canvasDom: undefined,
  ctx: undefined,
  background: undefined,
  car: undefined,
  interval: undefined,
  canvasWidth: 500,
  canvasHeight: 700,
  frames: 0,
  obstacles: [],


  init(id) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this.drawBackground()
    this.drawCar()
    this.setEventListeners()
  },

  drawBackground() {
    this.background = new Background(this.ctx)
    this.background.drawRoad()
    this.background.drawHedges()
    this.background.drawMiddleLine()
    this.background.drawBermLines()
  },

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  },

  drawCar() {
    this.car = new Car(
      this.ctx,
      this.canvasWidth / 2 - 35,
      this.canvasHeight - 160,
      75,
      160
    )
    this.car.init()
    this.interval = setInterval(() => {
      this.frames++
      this.clearCanvas()
      this.drawBackground()
      this.frames % 150 === 0
        ? this.obstacles.push(new Obstacle(this.ctx))
        : null
      this.obstacles != 0
        ? this.obstacles.forEach(elm => {
            elm.moveObstacle()
            elm.drawObstacle()
            elm.isCollision(this.car, elm) ? this.gameOver() : null
          })
        : null

      this.car.draw()
    }, 10)
  },

  gameOver() {
    alert("CRASH! Game over")
    document.location.reload();
    window.clearInterval(this.interval)
  },

  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car.move('left') : null
      e.keyCode === 39 ? this.car.move('right') : null
    }
  }
}

class Background {
  constructor(ctx) {
    this.ctx = ctx
    this.posX = 0
    this.posY = 0
    this.bgHeight = 700
    this.bgWidth = 500
  }

  drawHedges() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(this.posX, this.posY, 40, this.bgHeight)
    this.ctx.fillRect(this.bgWidth - 40, this.posY, 40, this.bgHeight)
  }

  drawRoad() {
    this.ctx.fillStyle = '#9C9C9C'
    this.ctx.fillRect(this.posX, this.posY, this.bgWidth, this.bgHeight)
  }

  drawMiddleLine() {
    this.ctx.strokeStyle = '#DADADA'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([80, 40])
    this.ctx.beginPath()
    this.ctx.moveTo(this.bgWidth / 2, 0)
    this.ctx.lineTo(this.bgWidth / 2, this.bgHeight)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  drawBermLines() {
    //left berm
    this.ctx.strokeStyle = '#DADADA'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([])
    this.ctx.beginPath()
    this.ctx.moveTo(60, 0)
    this.ctx.lineTo(60, this.bgHeight)
    this.ctx.stroke()
    this.ctx.closePath()

    //right berm
    this.ctx.beginPath()
    this.ctx.moveTo(this.bgWidth - 60, 0)
    this.ctx.lineTo(this.bgWidth - 60, this.bgHeight)
    this.ctx.stroke()
    this.ctx.closePath()
  }
}

class Car {
  constructor(ctx, posX, posY, carW, carH) {
    this.ctx = ctx
    this.posX = posX
    this.posY = posY
    this.carW = carW
    this.carH = carH
    this.bgSize = {
      width: gameApp.canvasWidth,
      height: gameApp.canvasHeight
    }
    this.car = undefined
    this.vel = 25
  }

  draw() {
    this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  }

  init() {
    this.car = new Image()
    this.car.src = 'images/car.png'
    console.log('initialized!')
    this.car.onload = () =>
      this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  }

  move(dir) {
    dir === 'right'
      ? !this.isBorderCollisionWithRight()
        ? (this.posX += this.vel)
        : null
      : null
    dir === 'left'
      ? !this.isBorderCollisionWithLeft()
        ? (this.posX -= this.vel)
        : null
      : null
  }

  isBorderCollisionWithLeft() {
    return this.posX <= 45 ? true : false
  }

  isBorderCollisionWithRight() {
    return this.posX >= 385 ? true : false
  }
}

class Obstacle {
  constructor(ctx) {
    this.ctx = ctx
    this.posX = Math.floor(Math.random() * gameApp.canvasWidth) - 50
    this.posY = 0
    this.width = Math.floor(Math.random() * 200) + 50
    this.height = 45
    this.bgSize = {
      width: gameApp.canvasWidth,
      height: gameApp.canvasHeight
    }
    this.vel = 5
  }

  drawObstacle() {
    this.ctx.fillStyle = '#D5BA12'
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
  }

  moveObstacle() {
    this.posY += this.vel
  }

  isCollision(vehicle, obstacle) {
    return (
      vehicle.posX < obstacle.posX + obstacle.width &&
      vehicle.posX + vehicle.carW > obstacle.posX &&
      vehicle.posY < obstacle.posY + obstacle.height &&
      vehicle.posY + vehicle.carH > obstacle.posY
    )
  }
}
