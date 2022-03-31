window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    roadGame.init('myCanvas')
  }
};

const roadGame = {
  name: 'Road game',
  description: 'Road game',
  version: '1.0.0',
  author: 'Paula',
  license: undefined,
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: 500, h: 700 },
  obstacles: [],

  car: undefined,
  framesIndex: 0,

  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    console.log('EL CONTEXTO:', this.ctx)
    this.drawAll()
    this.createCar()
    //this.createObstacle()
    this.start()
    this.setEventListeners()
  },

  setDimensions() {
    this.gameSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
    this.canvasNode.setAttribute('width', this.gameSize.w)
    this.canvasNode.setAttribute('height', this.gameSize.h)
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

  // setObstacleMovement() {

  // },

  createCar() {
    this.car = new Car(this.ctx, 215, 580)
  },

  createObstacle() {
    this.obstacles.push(
      // new Obstacle(this.ctx.fillRect, this.gameSize, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h))
      new Obstacle(this.ctx, this.gameSize, (Math.random() * (this.gameSize.w - 100)), 0, (Math.random() * (300 - 100) + 100), 40))
    // console.log("obstacleGenerated")
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.car.draw()
      this.framesIndex++
      if (this.framesIndex % 10 === 0) {
        this.createObstacle()
      }
    }, 200)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawAll() {
    this.drawRoad()
    this.drawWhiteLines()
    this.drawDashedLine()

    this.obstacles.forEach(element => {
      element.draw()
      element.move()
    })
    // // this.car.draw()
    // if (this.framesIndex % 200 === 0) this.createObstacle()
  },

  drawRoad() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(40, 0, 420, this.gameSize.h)
  },

  drawWhiteLines() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(60, 0)
    this.ctx.lineTo(60, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(440, 0)
    this.ctx.lineTo(440, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  drawDashedLine() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(240, 0)
    this.ctx.setLineDash([40, 30])
    this.ctx.lineTo(240, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },
}