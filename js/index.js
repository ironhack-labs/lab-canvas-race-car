window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingApp.init('canvas');    
  }
};

const drawingApp = {
  name: 'Drawing app',
  description: 'Canvas app for basic shapes drawing',
  version: '1.0.0',
  license: undefined,
  author: 'Sara Martínez Vega',
  canvasTag: undefined,
  ctx: undefined,
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
    this.drawRoad()
    this.createCar()
    this.setEventListeners()
    this.drawAll()
  },

  setDimensions() {
    this.canvasSize.w = 500
    this.canvasSize.h = 700
    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },
  
  drawRoad() {

    //Gray Rectangle
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(20, 0, 500, 700)

    // Green Border
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(20, 0, 50, 700)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(450, 0, 50, 700)

    // White Lines
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(80, 0, 20, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(420, 0, 20, 700)

    // Dashed Lines
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([30, 10])
    this.ctx.moveTo(260, 40)
    this.ctx.lineTo(260, 710)
    this.ctx.stroke()
  },  
 
  createCar() {
    this.car = new Car(this.ctx, 160, 540, 70, 100, './../images/car.png')
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
    this.drawRoad()   
    this.car.draw()
      }, 70)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  generateObstacle() {
    console.log('BE CAREFUL!')
  },
}  

class Car {
  constructor(ctx, posX, posY, carWidth, carHeight, carImage) {
    
    this.carPos = {
      x: posX,
      y: posY
    }

    this.carSize = {
      w: carWidth,
      h: carHeight
    }

    this.imageName = carImage
    this.ctx = ctx
    this.carInstance = undefined
    this.init()
   } 

    init() {
      this.carInstance = new Image()
      this.carInstance.src = `images/${this.imageName}`
    }

    draw() {
      this.moveCar() 
      this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveCar(dir) {        
    }  
}