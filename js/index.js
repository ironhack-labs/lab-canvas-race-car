window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingApp.init('canvas')
  }
};


const drawingApp = {
  name: 'Drawing app',
  description: 'Canvas app for Island Racer',
  version: '1.0.0',
  license: undefined,
  author: 'Tal Burdman',
  canvasTag: undefined,
  ctx: undefined,
  car: undefined,
  frames: 0,
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
    this.createCar()
    this.drawAll()
    this.setEventListeners()

  },

  setDimensions() {
    this.canvasSize.w = 500
    this.canvasSize.h = 700
    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },

  drawRectangle() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

  },

  drawContinuousLines() {
    this.ctx.lineWidth = 7
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([0, 0])
    this.ctx.moveTo(70, 0)
    this.ctx.lineTo(70, this.canvasSize.h)
    this.ctx.stroke()

    this.ctx.lineWidth = 7
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([0, 0])
    this.ctx.moveTo(this.canvasSize.w - 70, 0)
    this.ctx.lineTo(this.canvasSize.w - 70, this.canvasSize.h)
    this.ctx.stroke()
  },

  drawDashedLines() {
    this.ctx.lineWidth = 6
    this.ctx.beginPath()
    this.ctx.setLineDash([50, 30])
    this.ctx.moveTo(this.canvasSize.w / 2, 0)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.stroke()
    this.ctx.strokeStyle = 'white'
  },

  // drawImage(imgName) {
  //   let imageInstance = new Image()
  //   imageInstance.src = `images/car.png`
  //   imageInstance.onload = () => this.ctx.drawImage(imageInstance, 210, 600, 80, 80)
  // },

  createCar() {
    this.car = new Car(this.ctx, 210, 600, 80, 80, 'car.png')
  },

  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === this.keys.left ? this.car.move('left') : null
      e.keyCode === this.keys.right ? this.car.move('right') : null

    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  drawAll() {
    setInterval(() => {
      this.frames++
      this.frames % 50 === 0 ? this.generateObstacle() : null
      this.clearScreen()
      this.drawRectangle()
      this.drawContinuousLines()
      this.drawDashedLines()
      this.car.draw()
      this.generateObstacle()
    }, 70)
  },

  generateObstacle() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(50, 0 + this.frames * 3, 200, 30)

  },



}




class Car {
  constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
    this.ctx = ctx
    this.carPos = {
      x: carPosX,
      y: carPosY
    }
    this.carSize = {
      w: carWidth,
      h: carHeight
    }
    this.imageName = carImage
    this.carInstance = undefined
    this.init()
  }

  init() {
    this.carInstance = new Image()
    this.carInstance.src = `images/${this.imageName}`
  }


  draw() {
    this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }


  move(dir) {
    dir === 'left' ? this.carPos.x -= 20 : null
    dir === 'right' ? this.carPos.x += 20 : null
  }
}

// drawingApp.init('canvas')

// drawingApp.drawRectangle('canvas')
// drawingApp.drawContinuousLines('canvas')
// drawingApp.createCar('canvas')
// drawingApp.drawDashedLines('canvas')
// drawingApp.drawImage('car.png')
// drawingApp.setEventListeners('canvas')
// drawingApp.drawLinearSquare('canvas')