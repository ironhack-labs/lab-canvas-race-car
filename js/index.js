window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceApp.init('canvas')
  }
};

const raceApp = {
  name: 'Race App',
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { width: undefined, height: undefined },
  obstacles: [],

  init(canvas) {
    this.canvasNode = document.querySelector(`#${canvas}`)
    this.ctx = this.canvasNode.getContext('2d')
    console.log('SE INICIA')
    this.setDimensions()
    this.createCar()
    this.createObstacles()
    this.setEventListeners()
    this.start()
  },

  setDimensions() {
    this.gameSize = {
      width: 500,
      height: 700
    }
  },

  /*width() {
    this.obstacleSize.width = Math.floor(Math.random() * 200)
  },

  posX() {
    this.obsPosition.x = Math.floor(Math.random() * 200)
  },*/

  createObstacles() {
    // this.width()
    //this.posX()
    this.obstacles.push(
      new Obstacle(this.ctx, 200, 100, 200, 30)
    )
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

  clearAll() {
    this.ctx.clearRect(0, 0, 500, 700)
  },

  drawAll() {
    this.drawRoad()
    this.drawDashedLine()
    this.car.drawCar()
    this.obstacles.forEach(eachObstacle => eachObstacle.drawObstacle())
    if (this.framesIndex % 30 === 0)
      this.createObstacles()

  },

  drawRoad() {
    console.log('la funcion q pinta FUNCIONA')
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.width, this.gameSize.height)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, this.gameSize.width - 100, this.gameSize.height)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(60, 0, 15, this.gameSize.height)
    this.ctx.fillRect(425, 0, 15, this.gameSize.height)
  },
  drawDashedLine() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(245, 0)
    this.ctx.setLineDash([30, 30])
    this.ctx.lineTo(245, this.gameSize.height)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createCar() {
    this.car = new Car(this.ctx, 320, 590, 50, 90)
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.framesIndex++
    }, 30)
  },
}


