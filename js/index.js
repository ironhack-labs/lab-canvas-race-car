window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    animatedApp.init('canvas')
  }
};

const animatedApp = {
  name: 'Animated App',
  description: 'Canvas app for basic shapes animating',
  version: '1.0.0',
  author: 'Carmen',
  license: undefined,
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: 500, h: 700 },


  framesIndex: 0,

  obstacles: [],

  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    console.log('EL CONTEXTO:', this.ctx)

    this.start()
    this.drawRoad()
    this.setEventListeners()
    this.createCar()
    this.createObstacles()


  },

  //PRIMERO BORRAR

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawRoad()
      this.car.draw()
      this.obstacles.forEach(eachObstacle => eachObstacle.draw())
      this.drawObstacles()
      this.framesIndex++
    }, 100)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  //LUEGO PINTAR

  //DRAW ROAD

  drawRoad() {
    this.drawFilledSquare()
    this.drawSolidLines()
    this.drawDashedLine()
  },



  drawFilledSquare() {
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(40, 0, this.gameSize.w - 80, this.gameSize.h)
  },

  drawSolidLines() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(55, 0)
    this.ctx.lineTo(55, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.moveTo(445, 0)
    this.ctx.lineTo(445, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  drawDashedLine() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(250, 0)
    this.ctx.setLineDash([60, 20])
    this.ctx.lineTo(250, 700)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  //SETTING CAR CLASS

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

  createCar() {
    this.car = new Car(this.ctx, 320, 550)
  },

  //SETTING OBSTACLES CLASS

  drawObstacles() {
    this.obstacles.draw()
    if (this.framesIndex % 100 === 0) this.createObstacles()
  },

  createObstacles() {
    this.obstacles.push(
      new Obstacles(this.ctx, this.gameSize, 100, 100, 100, 100, 5),
    )
  },


}
