/* ----- APP ----- */

/* ---DRAWING--- */

const drawingApp = {
  name: 'Drawing app',
  description: 'Canvas app for basic shapes drawing',
  version: '1.0.0',
  license: undefined,
  author: 'Manuel Barreda',
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
    this.drawAll()
    this.createCar()
    this.setEventListeners()

    console.log(this.ctx)       // Puedes ver el contexto por consola
  },

  setDimensions() {
    this.canvasSize.w = window.innerWidth*.4
    this.canvasSize.h = window.innerHeight*.8
    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },

  drawRectangle() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w * .6 / 2), 0, this.canvasSize.w * .6, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w * .525 / 2), 0, this.canvasSize.w * .525, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w * .5 / 2), 0, this.canvasSize.w * .5, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w * .475 / 2), 0, this.canvasSize.w * .475, this.canvasSize.h)
  },

  drawDashedLines() {
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 7
    this.ctx.beginPath()
    this.ctx.setLineDash([30, 20])      // Dash generator
    this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
    this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
    this.ctx.stroke()
  },

  createCar() {
    this.car = new Car(this.ctx, this.canvasSize.w / 2 - (441 * 0.15 / 2 + 7), this.canvasSize.h - (890 * 0.15), (441 * 0.15), (890 * 0.15), 'bugatti.png')
  },

  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === this.keys.left ? this.car.move('left') : null
      e.keyCode === this.keys.right ? this.car.move('right') : null
    }
  },

  drawAll() {
    setInterval(() => {
      this.frames++
      this.frames % 1500 === 0 ? this.generateObstacle() : null
      this.clearScreen()
      this.drawRectangle()
      this.drawDashedLines()
      this.car.draw()
    }, 70)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  generateObstacle() {
    console.log('NUEVO OBSTÁCULO! CUIDAO QUE VA!')
  }
};

/* -CAR- */
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
};


/* ----- DOM ----- */
    
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  drawingApp.init("canvas")
  }
};


