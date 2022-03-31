const RaceCar = {
  name: 'Race Car App',
  description: '',
  version: '1.0.0',
  author: 'PQ',
  license: undefined,
  canvasNode: undefined,
  ctx: undefined,
  car: undefined,
  blocks: [],
  gameSize: { w: undefined, h: undefined },
  framesIndex: 0,

  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    this.setDimensions()
    this.startGame
    this.createCar()
    this.setEventListeners()


  },
  setDimensions() {
    this.gameSize = {
      w: 500,
      h: 700
    }
    this.canvasNode.setAttribute('width', this.gameSize.w)
    this.canvasNode.setAttribute('height', this.gameSize.h)
  },
  drawRoad() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 40, this.gameSize.h)
    this.ctx.fillRect(this.gameSize.w - 40, 0, 40, this.gameSize.h)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(50, 0, 10, this.gameSize.h)
    this.ctx.fillRect(this.gameSize.w - 60, 0, 10, this.gameSize.h)

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([40, 20])      // <--
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createCar() {
    this.car = new Car(this.ctx, this.gameSize.w / 2 - 35, this.gameSize.h - 150, 70, 100)
  },




  startGame() {

    setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.framesIndex++
    }, 30)


  },

  drawBlock() {
    this.ctx.fillStyle = 'red'
    this.blocks.push(this.ctx.fillRect(Math.random() * this.gameSize.w, 0, Math.random() * 150, 50))
    console.log('heheheh')
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawAll() {
    this.drawRoad()
    this.car.draw()
    if (this.framesIndex % 5 === 0) {

      this.drawBlock()
      // this.blocks.forEach(eachBlock => eachBlock.drawBlock())
      setTimeout(() => {

      }, 5);
    }
  },






  setEventListeners() {
    document.addEventListener('keydown', event => {
      const { key } = event
      if (key === 'ArrowLeft' && this.car.carPos.x >= 80) {
        this.car.moveLeft()
      }
      if (key === 'ArrowRight' && this.car.carPos.x <= this.gameSize.w - 160) {
        this.car.moveRight()
      }
    })

  },
}


