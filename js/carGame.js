const carGame = {
  name: 'Car Game',
  description: 'Basic Canvas app for element controlling',
  version: '1.0.0',
  license: undefined,
  author: 'Diego',
  canvasTag: undefined,
  ctx: undefined,
  carInstance: undefined,
  carPosition: { x: 200, y: 500 },
  carSize: { w: 100, h: 200 },

  canvasSize: {
    w: undefined,
    h: undefined
  },

  init() {
    this.createCar()
    this.setContext()
    this.setDimensions()

    this.setEventListeners()
    this.start()
  },
  setContext() {
    this.canvasTag = document.querySelector('canvas')
    this.ctx = this.canvasTag.getContext('2d')
    console.log(this.ctx)
  },




  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
    }, 10)
  },

  setDimensions() {

    this.canvasSize = {
      w: 500,
      h: 700,
    }

    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },

  setEventListeners() {
    document.onkeydown = evt => {
      if (evt.key === 'ArrowLeft') this.carPosition.x -= 10
      if (evt.key === 'ArrowRight') this.carPosition.x += 10
      if (evt.key === 'ArrowUp') this.carPosition.y -= 10
      if (evt.key === 'ArrowDown') this.carPosition.y += 10
    }
  },



  drawRoad() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, 400, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(60, 0, 10, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(430, 0, 10, 700)

  },
  dashedLine() {
    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([60, 20])      // <-- patrón de repetición
    this.ctx.moveTo(247.5, 0)
    this.ctx.lineTo(247.5, 700)
    this.ctx.stroke()
    this.ctx.closePath()

  },

  createCar() {
    this.carInstance = new Image()
    this.carInstance.src = './images/car.png'
  },

  drawAll() {
    this.drawRoad()
    this.dashedLine()
    this.drawCar()
    this.createObstacles()
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  drawCar() {
    console.log("ENTRO, NO???")
    this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
  },



}