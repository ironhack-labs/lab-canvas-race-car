window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    animatedApp.init('canvas')
    animatedApp.setDimensions()

  }
};

const animatedApp = {
  name: 'Car Race',
  description: 'Canvas game car race',
  version: '1.0.0',
  author: 'Alvaro',
  license: undefined,
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: undefined, h: undefined },
  car: undefined,

  init(canvas) {
    this.canvasNode = document.querySelector(`#${canvas}`)
    this.ctx = this.canvasNode.getContext('2d')
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

  createAll() {
    this.drawRoad()
    this.drawLines()
    this.drawCar()
  },

  drawRoad() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(20, 0, this.gameSize.w - 40, this.gameSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(35, 0, this.gameSize.w - 480, this.gameSize.h)
    this.ctx.fillRect(445, 0, this.gameSize.w - 480, this.gameSize.h)
  },

  drawLines() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([60, 20])
    this.ctx.lineTo(this.gameSize.w / 2, 700)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createCar() {
    this.car = new Car(this.ctx, this.gameSize, this.gameSize.w / 2 - 25, 575, 50, 100)
  },

  drawCar() {
    this.car.draw()
  },

  setEventListeners() {
    document.onkeydown = event => {
      const { key } = event
      if (key === 'ArrowLeft') {
        console.log('IZQUIERDAAAAA')
        this.car.moveLeft()
      }
      if (key === 'ArrowRight') {
        console.log('DERECHA VALEE')
        this.car.moveRight()
      }
    }
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


  createObstacle() {
    this.obstacle = new Obstacle(this.ctx, this.gameSize, MathRandom(posX), MathRandom(posY), MathRandom(width), 50)
  },



}
