window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

const carRaceApp = {    
    name: 'Car racing arcade game',
    author: 'Javier de Salas',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas app to drive a car avoiding random obstacles',
    canvasId : undefined,
    ctx: undefined,
    car: undefined,
    canvasSize: {
      w: undefined,
      h: undefined,
    },

    init(id) {
      this.canvasId = id
      this.ctx = document.getElementById(this.canvasId).getContext('2d')
      this.setDimensions()

      this.drawRoad()

      this.placeCar()
      this.drawCar()     
    },

    setDimensions() {
      const canvas = document.getElementById(this.canvasId)

      this.canvasSize = {
           w: canvas.width,
           h: canvas.height
        }
    },
  
     drawRoad() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(50, 0, this.canvasSize.w-100, this.canvasSize.h)

      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(60, 0, this.canvasSize.w-120, this.canvasSize.h)

      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(75, 0, this.canvasSize.w-150, this.canvasSize.h)

      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.setLineDash([40,40])
      this.ctx.moveTo (this.canvasSize.w / 2, 0)
      this.ctx.lineTo (this.canvasSize.w / 2, this.canvasSize.h)
      this.ctx.closePath()
      this.ctx.stroke()
    },

    placeCar() {
     this.car = new Car (this.ctx, this.canvasSize.w /2 - 25, this.canvasSize.h  - 125, 50, 100, 'car.png')
     console.log(this.car)
    
     this.carImage = new Image()
     this.carImage.src = `images/${this.car.imgName}`
    },

    drawCar() {
      this.car.renderCar()
    }
  
    
}


class Car {
  constructor (ctx, posX, posY, carW, carH, imgName) {
    this.ctx = ctx
    this.carPos = {
      x: posX,
      y: posY
    }
    this.carSize = {
      w: carW,
      h: carH
    }
    this.imgName = imgName
    this.imgInstance = undefined

    this.initCar()
  }

  initCar() {
    this.imgInstance = new Image()
    this.imgInstance.src = `images/${this.imgName}`
  }

  renderCar() {
    this.imgInstance.onload = e => this.ctx.drawImage(this.imgInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }
}


carRaceApp.init('cars')

