const basicApp = {
  name: 'Basic road and car',
  description: 'Basic Canvas app car',
  version: '1.0.0',
  license: undefined,
  author: 'Yad',
  canvasTag: undefined,
  ctx: undefined,
  carInstance: undefined,
  carPosition: { x: 225, y: 550 },
  carSize: { w: 50, h: 80 },
  canvasSize: {
    w: undefined,
    h: undefined
  },
  obstacle: [],
  startGame() {
    this.setContext()
    this.setDimensions()
    this.setEventListeners()
    this.createObstacle()
    this.createCar()
    this.start()

  },

  setContext() {
    this.canvasTag = document.querySelector('canvas')
    this.ctx = this.canvasTag.getContext('2d')
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
    }
  },
  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      obstacles.forEach((each) => each.move())
      this.framesIndex++
      if (this.framesIndex % 100 === 0) {
        this.createObstacle()
      }
    }, 10)

  },

  drawAll() {
    this.drawRoad()
    this.drawDashedLines()
    this.drawCar()
    this.drawObstacleAll()


  },

  drawRoad() {

    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(10, 0, 30, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(30, 0, 10, 700)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(460, 0, 30, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(450, 0, 10, 700)


  },
  drawDashedLines() {
    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([60, 20])      // <-- patrón de repetición
    this.ctx.moveTo(this.canvasSize.w / 2, 0)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h, 0)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.strokeStyle = 'red'
    this.ctx.lineWidth = 30
  },
  createCar() {
    this.carInstance = new Image()
    this.carInstance.src = './/images/car.png'

  },
  drawCar() {
    this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
  },
  createObstacle() {
    this.obstacle.push(
      new Obstacle(this.ctx, 80, 20, 300, 300),
      new Obstacle(this.ctx, 50, 10, 200, 20),
      new Obstacle(this.ctx, 60, 0, 100, 20),
      new Obstacle(this.ctx, 70, 40, 0, 20)
    )
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

  },
  clearRoad() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

  },
  drawObstacleAll() {
    this.obstacle.forEach(elm => elm.draw())
  },


}
