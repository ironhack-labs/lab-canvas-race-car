window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingApp.init ('canvas')
  }
};



const drawingApp = {
  name: 'Car app',
  description: 'Car in the road',
  version: '1.0.0',
  license: undefined,
  author: 'Natalia Fernández',
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
    this.ctx.lineWidth = 5
    this.ctx.beginPath()
    this.ctx.setLineDash([50, 30])
    this.ctx.moveTo(this.canvasSize.w / 2, 0)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.strokeStyle = 'white'
    this.ctx.stroke()
  },

  createCar() {
    this.car = new Car (this.ctx, 210, 500, 75, 100, `images/car.png`)
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
          this.clearScreen()
          this.drawRectangle()
          this.drawDashedLines ()
          this.car.draw()
        }, 70)
  },
  
   clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },


  drawImage(imgName) {
    let imageInstance = new Image()
    imageInstance.src = `images/car.png`
    imageInstance.onload = () => this.ctx.drawImage (imageInstance, 210, 500, 75, 100)
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

    draw() {
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
  
    init() {
      this.carInstance = new Image()
      this.carInstance.src = `images/car.png`
  }
  
  move(dir) {
    dir === 'left' ? this.carPos.x -= 20 : null
    dir === 'right' ? this.carPos.x += 20 : null
  }
}


 

drawingApp.init('canvas')
drawingApp.setDimensions('canvas')
drawingApp.drawRectangle('canvas')
drawingApp.drawDashedLines('canvas')
drawingApp.drawImage ('canvas')
