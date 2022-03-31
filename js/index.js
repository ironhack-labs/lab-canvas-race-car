window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    controlledApp.init('canvas')
  }
};


const controlledApp = {
  name: 'Car App',
  description: 'Car game for canvas  practice',
  version: '1.0.0',
  author: 'Isaac',
  licensce: undefined,
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: undefined, h: undefined },

  car: undefined,

  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    console.log('EL CONTEXTO:', this.ctx)
    this.setDimensions()
    this.setEventListeners()
    this.createCar()
    this.drawAll()

    this.start()

  },

  setDimensions() {
    this.gameSize = {
      w: 500,
      h: 700
    }
    this.canvasNode.setAttribute('witdh', this.gameSize.w)
    this.canvasNode.setAttribute('witdh', this.gameSize.h)

  },

  drawAll() {
    this.drawRoadGreen()
    this.drawRoadGrey()
    this.drawRoadLineWhiteBack()
    this.drawRoadGreyTop()
    this.drawLinesCenter()
    this.drawCar()
    // this.drawObstacles()

  },

  drawRoadGreen() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawRoadGrey() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, this.gameSize.w - 100, this.gameSize.h)
  },

  drawRoadLineWhiteBack() {
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(80, 0, this.gameSize.w - 160, this.gameSize.h)
  },

  drawRoadGreyTop() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(100, 0, this.gameSize.w - 200, this.gameSize.h)
  },

  drawLinesCenter() {
    this.ctx.lineWidth = 20
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([60, 40])
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

  },

  createCar() {
    this.car = new Car(this.ctx, 200, 580, 100, 100)
    console.log('soy un coche rummm rum')
  },

  drawCar() {
    this.car.drawCar()
    console.log('aparezco')
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

  // Para que  se pinte y se borre
  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
    }, 30)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

// createObstacles(){
//   this.obstacles = new Obstacles 
//   console.log('soy un obstaculo rummm rum')
// },

// drawObstacles (){
//   this.obstacles.drawObstacles()
// }


}