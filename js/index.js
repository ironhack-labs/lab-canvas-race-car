window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    controlledApp.init('canvas')
  }
}
const controlledApp = {
  name: 'Race Car',
  description: 'Canvas racing car app',
  version: '1.0.0',
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: undefined, h: undefined },
  car: undefined,
  framesIndex: 0,

  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    console.log('EL CONTEXTO:', this.ctx)
    this.setDimensions()
    this.createCar()
    this.board()
    this.setEventListeners()
    this.car.drawCar()
    this.start()
  },

  setDimensions() {
    this.gameSize = {
      w: 500,
      h: 700,
    }
    this.canvasNode.setAttribute('width', this.gameSize.w)
    this.canvasNode.setAttribute('height', this.gameSize.h)
  },

  setEventListeners() {
    document.onkeyup = event => {
      const { key } = event
      if (key === 'ArrowLeft') {
        console.log('Left')
        this.car.moveLeft()
      }
      if (key === 'ArrowRight') {
        console.log('Right')
        this.car.moveRight()
      }
    }
  },

  createCar() {
    this.car = new Car(this.ctx, 200, 550, 80, 120)
    console.log('CAAAAAARRRRR')
  },

  board() {
    this.drawGreen()
    this.drawGrey()
    this.drawWhite()
    this.drawLightGrey()
    this.drawLine()
  },

  drawLine() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([60, 20])
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  drawLightGrey() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(90, 0, this.gameSize.w - 180, this.gameSize.h)
  },

  drawWhite() {
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(70, 0, this.gameSize.w - 140, this.gameSize.h)
  },

  drawGrey() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(40, 0, this.gameSize.w - 80, this.gameSize.h)
  },

  drawGreen() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
    }, 30)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawAll() {
    this.board()
    this.car.drawCar()

  },
}
