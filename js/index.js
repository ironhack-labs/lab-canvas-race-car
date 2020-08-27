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
    canvasSize: {
      w: undefined,
      h: undefined,
    },
    init(id) {
      this.canvasId = id
      this.ctx = document.getElementById(this.canvasId).getContext('2d')
      this.setDimensions()

      this.drawRoad()

      const car = new Car (this.ctx, this.canvasSize.w/2 - 20, this.canvasSize.h - 100, 40, 80, 'car.png')

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
    this.drawCar()
  }

  drawCar() {
    console.log(this.imgInstance)
    console.log(this)
    console.log(this.ctx)
    this.ctx.drawImage(this.imgInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }
}


carRaceApp.init('cars')
carRaceApp.drawRoad()
