window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingApp.init('canvas')
  }
};


const drawingApp = {
  name: 'Car app',
  description: 'Canvas app for basic shapes drawing',
  version: '1.0.0',
  license: undefined,
  author: 'Loreto Álvarez',
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
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(60, 0, 10, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(this.canvasSize.w - 70, 0, 10, this.canvasSize.h)
  },

  drawDashedLines() {
    this.ctx.lineWidth = 7
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([50, 30])
    this.ctx.moveTo(this.canvasSize.w / 2, 0)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.stroke()
  },
      
  createCar() {
    this.car = new Car(this.ctx, 210, 600, 75, 90, 'images/car.png')
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
      this.frames % 50 === 0 ? this.generateObstacle() : null
      this.drawRectangle()
      this.drawDashedLines()
      this.car.draw()
    }, 70)
     
  }
}
  

  class Car {
    constructor(ctx, posX, posY, carWidth, carHeight, carImage) {
        this.ctx = ctx
        this.carPos = {
            x: posX,
            y: posY
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
        this.carInstance.src = 'images/car.png'
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
// drawingApp.setDimensions()
// drawingApp.drawRectangle()
// drawingApp.drawDashedLines()
// //drawingApp.drawImage('images/car.png')
// drawingApp.createCar('images/car.png')
    
    






