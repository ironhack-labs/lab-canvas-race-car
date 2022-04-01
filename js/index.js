window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    this.CarRace.init(canvasID)
  }
}

const CarRace = {
  name: 'Race Card',
  description: 'Lab carrito de carreras',
  version: '1.0.0',
  author: 'Guille',
  license: undefined,
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
    this.drawRoad()
    this.drawCar()
    this.createObstacle()


  },


  setDimensions() {
    this.gameSize = {
      w: 500,
      h: 700
    }

  },

  drawRoad() {

    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(20, 0, this.gameSize.w - 40, this.gameSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, -20, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 40, this.gameSize.w - 490, this.gameSize.h - 660),
      this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 110, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 180, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 250, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 320, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 390, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 460, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 530, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 600, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(230, 670, this.gameSize.w - 490, this.gameSize.h - 660)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(25, 0, this.gameSize.w - 487, this.gameSize.h - 0)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(460, 0, this.gameSize.w - 487, this.gameSize.h - 0)

  },


  drawCar() {

  },

  createObstacle() {
    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(300, 56, this.gameSize.w - 340, this.gameSize.h - 605)

  },


  setEventListeners() {
    document.onkeyup = event => {
      const { key } = event
      if (key === 'ArrowLeft') {
        this.ball.moveLeft()
      }
      if (key === 'ArrowRight') {
        this.ball.moveRight()
      }
    }
  },


  createObstacle() {
    this.ctx.obstacle = new Obstacle(this.ctx, 50, 50, 30, 30)
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.framesIndex++      // <- ayudita
    }, 30)

  },
}


this.clearAll()
this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)


this.drawAll()
this.obstacle.draw()
if (this.framesIndex % 30 === 0) this.createObstacle()

