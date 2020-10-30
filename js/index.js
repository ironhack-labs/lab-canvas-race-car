window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingRoad.init('canvas')
  }
};


const drawingRoad = {
  name: 'Drawing road',
  description: 'Canvas app for road drawing',
  version: '1.0.0',
  license: undefined,
  author: 'Ramón Rodríguez',
  canvasTag: undefined,
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined
  },
  frames: 0,
  car: undefined,
  obstacles: [],
  keys: {
    left: 37,
    right: 39
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

    //-------------------------OPCIÓN II------------------------------------
    // this.ctx.fillStyle = 'white'
    // this.ctx.fillRect(60, 0, 10, this.canvasSize.h)
    // this.ctx.fillStyle = 'white'
    // this.ctx.fillRect( this.canvasSize.w - 70, 0, 10, this.canvasSize.h)

  },

  drawContinuousLines() {
    this.ctx.lineWidth = 7
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([0, 0])
    this.ctx.moveTo(65, 0)
    this.ctx.lineTo(65, this.canvasSize.h)
    this.ctx.stroke()

    this.ctx.lineWidth = 7
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([0, 0])
    this.ctx.moveTo(this.canvasSize.w - 65, 0)
    this.ctx.lineTo(this.canvasSize.w - 65, this.canvasSize.h)
    this.ctx.stroke()
  },

  drawDashedLines() {
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([50, 30])
    this.ctx.moveTo(this.canvasSize.w / 2, 0)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.stroke()
  },



  createCar() {
    this.car = new Car(this.ctx, 210, 550, 75, 75, 'car.png')
  },

  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === this.keys.left ? this.car.moveCar('left') : null
      e.keyCode === this.keys.right ? this.car.moveCar('right') : null
    }
  },

  drawAll() {
    setInterval(() => {
      this.frames++
      this.frames % 50 === 0 ? this.generateObstacle() : null
      this.clearScreen()
      this.drawRectangle()
      this.drawContinuousLines()
      this.drawDashedLines()
      this.car.drawCar()
      this.obstacles.forEach(elm => {
        elm.drawObstacle()
        elm.moveObstacle()
      })
      console.log(this.obstacles)
    }, 70)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  generateObstacle() {

    let obstacle1 = new Obstacle(this.ctx, 'red')
    this.obstacles.push(obstacle1)
  }
}



//---------------------------------------------------------------------------------------
class Obstacle {
  constructor(ctx, color) {
    this.ctx = ctx
    this.color = color

    this.obstPos = {
      x: Math.floor(Math.random() * 500),
      y: 0
    }
    this.obstSize = {
      w: Math.floor(Math.random() * (50 - 400)),
      h: 30
    }

  }

  drawObstacle() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.obstPos.x, this.obstPos.y, this.obstSize.w, this.obstSize.h)
  }

  moveObstacle() {

    this.obstPos.y += 10

  }


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
    this.carName = carImage
    this.carInstance = undefined

    this.init()
  }

  init() {
    this.carInstance = new Image()
    this.carInstance.src = `images/${this.carName}`
  }

  drawCar() {
    this.moveCar()
    this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  moveCar(dir) {
    dir === 'left' ? this.carPos.x -= 20 : null
    dir === 'right' ? this.carPos.x += 20 : null
  }

}

