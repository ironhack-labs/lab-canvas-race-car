const app = {
  appName: 'Run Run PUUM',
  version: '1.0.0',
  license: undefined,
  author: 'David Daganzo',
  description: 'First Canvas app for basic shapes drawing',
  ctx: undefined,
  imageInstance: undefined,
  canvasSize: {
    w: undefined, h: undefined
  },

  carData: {
    pos: { x: 500 / 2 - 40, y: 520 },
    size: { w: 80, h: 160 },
    image: 'images/car.png'
  },

  init() {
    this.setDimensions()
    this.setContext()
    this.createCar()
    this.start()


  },

  setDimensions() {
    this.canvasSize = {
      w: document.querySelector('#canvas').width,
      h: document.querySelector('#canvas').height
    }

  },

  setContext() {
    this.ctx = document.querySelector('#canvas').getContext('2d')

  },

  drawRoad() {
    this.drawSquare()
    this.drawLines()

  },

  drawSquare() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
  },

  drawLines() {
    this.ctx.beginPath()
    this.ctx.moveTo(70, 0)
    this.ctx.lineTo(70, this.canvasSize.h)
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 20
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.moveTo(this.canvasSize.w - 70, 0)
    this.ctx.lineTo(this.canvasSize.w - 70, this.canvasSize.h)
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 20
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.setLineDash([60, 20])
    this.ctx.moveTo(this.canvasSize.w / 2, 0)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.setLineDash([0, 0])
  },


  createCar() {
    this.imageInstance = new Image()
    this.imageInstance.src = this.carData.image
  },

  drawAll() {
    this.drawRoad()
    this.ctx.drawImage(
      this.imageInstance,
      this.carData.pos.x,
      this.carData.pos.y,
      this.carData.size.w,
      this.carData.size.h
    )
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
    }, 30)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },











}