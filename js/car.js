const carObj = {

  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { w: undefined, h: undefined },
  carSize: { w: undefined, h: undefined },
  car: undefined,
  FPS: 50,


  init() {
    this.setContext()
    this.setDimensions()
    this.setListeners()
    this.createCar()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasSize.width = 500
    this.canvasSize.height = 700
    this.carSize.width = 50
    this.carSize.height = 70
  },

  drawCar(){
    this.car.draw()
  },


  createCar() {
    this.car = new Car(this.ctx, this.canvasSize.width / 2 - 25, this.canvasSize.height - 100, this.carSize.width, this.carSize.height)
  },

  setListeners() {
    document.onkeydown = e => {
      e.key === 'ArrowLeft' ? this.car.moveLeft(20) : null
      e.key === 'ArrowRight' ? this.car.moveRight(this.canvasSize.width - 60) : null
    }
  },

}

class Car {
  constructor(ctx, posX, posY, width, height) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.width = width
    this.height = height

    this.image = undefined

    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = 'images/car.png'
    console.log(this.image)
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  moveLeft(canvasSizeWidth) { //Muevo a la izquierda
    if (this.posX > canvasSizeWidth) {
        this.posX -= 20
    } 
  }

  moveRight(canvasSizeWidth) { //Muevo a la derecha
    if (this.posX < canvasSizeWidth) {
        this.posX += 20
    } 
  }
}