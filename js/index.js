window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    controlledApp.setDimensions()
    controlledApp.init('canvas')
  }
};

const controlledApp = {
  name: "Race car",
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: undefined, h: undefined },

  car: undefined,

  //framesIndex: 0,   <----Luego para los obstáculos


  init(canvas) {
    this.canvasNode = document.querySelector(`#${canvas}`)
    this.ctx = this.canvasNode.getContext("2d")
    this.setDimensions()
    this.createCar()
    this.createAll()
    this.setEventListeners()
    this.start()
  },

  setDimensions() {
    this.gameSize = {
      w: 500,
      h: 700
    }
  },

  setEventListeners() {
    document.onkeyup = event => {
      const { key } = event
      if (key === 'ArrowLeft') {
        this.car.moveLeft()
      }
      if (key === 'ArrowRight') {
        this.car.moveRight()
      }
    }
  },


  createAll() {
    this.createGrass()
    this.createLines()
    this.drawCar()
  },


  createGrass() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(30, 0, this.gameSize.w - 60, this.gameSize.h)

    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 15
    this.ctx.strokeRect(50, 0, this.gameSize.w - 100, 2050)
  },

  createLines() {
    this.ctx.lineWidth = 15
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([60, 20])
    this.ctx.lineTo(this.gameSize.w / 2, 700)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createCar() {
    this.car = new Car(this.ctx, this.gameSize, this.gameSize.w / 2 - 45, 500, 90, 150)
    console.log(this.car)
  },

  drawCar() {
    console.log('hellooooo')
    this.car.draw()
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.createAll()
    }, 30)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },



}