window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carRace.init("canvas")

  }
};

const carRace = {
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: undefined, h: undefined },
  car: undefined,
  framesIndex: 0,
  obstacles: [],
  obstacleSize: { w: undefined },
  obstaclePost: { x: undefined },
  framesIndex: 0,




  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    console.log('EL CONTEXTO:', this.ctx)
    this.setDimensions()
    this.setEventListeners()
    this.drawRoad()
    this.createCar()
    this.drawCar()
    this.drawObstacle()
    this.start()

  },
  setDimensions() {
    this.gameSize = {
      w: 500,
      h: 700
    }
  },
  drawRoad() {
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(20, 0, this.gameSize.w - 40, this.gameSize.h)

    this.ctx.fillStyle = "white"
    this.ctx.fillRect(35, 0, this.gameSize.w - 485, this.gameSize.h)
    this.ctx.fillRect(450, 0, this.gameSize.w - 485, this.gameSize.h)

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([60, 20])
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()


  },
  createCar() {
    this.car = new Car(this.ctx, this.gameSize, 175, 550, 150, 150)
  },
  drawCar() {
    this.car.draw()
  },
  width() {
    this.obstacleSize.w = Math.floor(Math.random() * 350)
  },
  positionX() {
    this.obstaclePost.x = Math.floor(Math.random() * 350)
  },

  drawObstacle() {
    this.width()
    this.positionX()
    this.obstacles.push(new Obstacle(this.ctx, this.obstaclePost.x, 0, this.obstacleSize.w))
  },

  drawAll() {
    this.drawRoad()
    this.drawCar()
    //aqui creas el bloque con un intervalo
    if (this.framesIndex % 60 === 0) this.drawObstacle()
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
  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.framesIndex++
    }, 30)
  },
  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  }
}