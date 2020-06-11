const carGame = {
  name: 'Car Game',
  description: 'Basic animated HTML5 Canvas app',
  version: '1.0.0',
  author: 'Andrés Barros, Diego Ortiz, Laura del Toro',
  license: undefined,
  canvasDom: undefined,
  ctx: undefined,
  car: undefined,
  background: undefined,
  obstacles: [],
  frames: 0,
  canvasSize: {
    w: window.innerWidth / 2,
    h: window.innerHeight
  },
  init(id) {
    this.canvasDom = document.getElementById(id)
    this.canvasDom.setAttribute('width', this.canvasSize.w)
    this.canvasDom.setAttribute('height', this.canvasSize.h)
    this.ctx = this.canvasDom.getContext('2d')
    this.drawGame("car.png")
    this.setEventListeners()
  },
  drawGame(carName) {
    this.background = new Background(this.ctx, this.canvasSize, )
    this.car = new Car(this.ctx, carName, this.canvasSize.w / 2 - 40, this.canvasSize.h - 250, 80, 150, 80, this.canvasSize)
    this.car.init()

    setInterval(() => {
      this.clearScreen()
      this.background.drawBackground()
      this.car.drawCar()
      if (this.frames % 70 === 0 || this.frames === 0) {
        const newObs = new Obstacle(this.canvasSize, this.ctx)
        newObs.generateRandomPosition()
        this.obstacles.push(newObs)
      }
      this.frames++
      this.obstacles.forEach(elm => elm.drawObstacle(elm.randomPosition))
    }, 50)
  },
  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car.move('left') : null
      e.keyCode === 39 ? this.car.move('right') : null
    }
  },
  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  }
}



class Background {
  constructor(ctx, canvasSize) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.dashedLineInit = 10
  }
  drawBackground() {
    //Rectangles
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
    this.ctx.fillStyle = "#aaa"
    this.ctx.fillRect(120, 0, this.canvasSize.w - 240, this.canvasSize.h)
    this.ctx.fillStyle = "#fff"
    this.ctx.fillRect(135, 0, 15, this.canvasSize.h)
    this.ctx.fillRect(this.canvasSize.w - 150, 0, 15, this.canvasSize.h)

    //Lines
    this.ctx.beginPath();
    this.ctx.setLineDash([40, 30])
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = '#fff'
    this.ctx.moveTo(this.canvasSize.w / 2, this.dashedLineInit)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.stroke()
    this.dashedLineInit = -this.dashedLineInit
  }
}



class Car {
  constructor(ctx, name, posX, posY, carW, carH, vel, canvasSize) {
    this.ctx = ctx
    this.name = name
    this.posX = posX
    this.posY = posY
    this.carW = carW
    this.carH = carH
    this.vel = vel
    this.canvasSize = canvasSize
    this.car = undefined
  }
  init() {
    this.car = new Image()
    this.car.src = `images/${this.name}`
  }
  move(dir) {
    dir === 'left' && this.posX >= 175 ? this.posX -= this.vel : null
    dir === 'right' && this.posX <= this.canvasSize.w - this.carW - 175 ? this.posX += this.vel : null
  }
  drawCar() {
    this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  }
}

class Obstacle {
  constructor(canvasSize, ctx) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.posY = -50
    this.posX = [175, 320, 450, 300, 175]
    this.width = [this.canvasSize.w - 480, this.canvasSize.w - 480, this.canvasSize.w / 5, this.canvasSize.w / 4, this.canvasSize.w / 4]
    this.height = 40
    this.vel = 5
    this.randomPosition = undefined
  }
  generateRandomPosition() {
    this.randomPosition = Math.floor(Math.random() * this.posX.length)
  }
  drawObstacle(randomPosition) {
    this.ctx.fillStyle = "red"
    this.posY += this.vel
    this.ctx.fillRect(this.posX[randomPosition], this.posY, this.width[randomPosition], 50)
  }

}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    carGame.init("canvas");
  };
};