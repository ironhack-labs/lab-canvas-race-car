const squaresApp = {
  name: 'Squares app',
  description: 'Canvas app for square shapes drawing',
  version: '1.0.0',
  license: undefined,
  author: 'Cristy López Piñeiro',
  canvasTag: undefined,
  ctx: undefined,
  frames: 0,
  car: undefined,
  keys: {
    left: 37,
    right: 39
  },
  canvasSize: {
    w: undefined,
    h: undefined
  },

  init(id) {
    this.canvasTag = document.getElementById(id)
    this.ctx = this.canvasTag.getContext('2d')
    this.setDimensions()
    this.drawRectangle()
    this.drawDashedLines()
    this.setDimensions()
    this.createCar()
    this.setEventListeners()
    this.drawAll()
    this.clearScreen()
    this.generateObstacle()

    console.log(this.ctx)
  },

  setDimensions() {
    this.canvasSize.w = 500
    this.canvasSize.h = 700
    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },

  drawRectangle() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(40, 0, this.canvasSize.w - 490, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(450, 0, this.canvasSize.w - 490, this.canvasSize.h)
  },

  drawDashedLines() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([40, 20])
    this.ctx.moveTo(245, 0)
    this.ctx.lineTo(245, 700)
    this.ctx.stroke()
    console.log(this.drawDashedLines())
  },



  createCar() {
    this.car = new Car(this.ctx, this.canvasSize, 200, 600, 70, 100, `images/car.png`)
    console.log(createCar())
  },

  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === this.keys.left ? this.car.move('left') : null
      e.keyCode === this.key.right ? this.car.move('right') : null
    }
  },

  drawAll() {
    setInterval(() => {
      this.frames++
      this.frames % 50 === 0 ? this.generateObstacle() : null
      this.clearScreen()
      this.drawRectangle()
      this.drawDashedLines()
      this.car.draw()
    }, 70)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  drawImage(imageName) {
    this.imageInstance = new Image()
    this.imageInstance.src = `images/car.png`
    this.imageInstance.onload = () => this.ctx.drawImage(imageInstance, 200, 600, 70, 100)
  },

  generateObstacle() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(0, 100, this.canvasSize.w - 350, this.canvasSize.h - 670)
    console.log(generateObstacle())
  },
}

class Car {
  constructor(ctx, canvasSize, carPosX, carPosY, carWidth, carHeight, carImage) {
    this.ctx = ctx
    this.canvasSize = {
      w: canvasSize.w,
      h: canvasSize.h
    }
    this.carPos = {
      x: carPosX,
      y: carPosY
    }
    this.carSize = {
      w: carWidth,
      h: carHeight
    }
    this.imageName = carImage
    this.imageInstance = undefined
    this.init()
  }


  draw() {
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  move(dir) {
    dir === 'left' ? this.carPos.x -= 20 : null
    dir === 'right' ? this.carPos.y += 20 : null
  }

}




window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    squaresApp.init('canvas')
    squaresApp.drawRectangle()
    squaresApp.setDimensions()
    squaresApp.drawRectangle()
    squaresApp.drawDashedLines()
    squaresApp.setDimensions()
    squaresApp.createCar()
    squaresApp.setEventListeners()
    squaresApp.drawAll()
    squaresApp.clearScreen()
    squaresApp.generateObstacle()
  }
}