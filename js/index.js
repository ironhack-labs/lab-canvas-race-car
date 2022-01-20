
const carApp = {
  appName: 'CarApp',
  author: 'AChFr',
  version: '1.0.0',
  license: undefined,
  gameSize: { w: 500, h: 700 },
  ctx: undefined,

  car: undefined,
  obstacles: [],
  frameIndex: 0,
  result: false,


  init() {
    this.setContext()

    this.createCar()

    this.drawAll()
    this.setEventHandlers()


  },
  setContext() {
    this.ctx = document.getElementById('canvas').getContext('2d')
    console.log(this.ctx)
  },


  drawfill() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(10, 0, this.gameSize.w - 20, this.gameSize.h)
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(30, 0, this.gameSize.w - 60, this.gameSize.h)
    this.ctx.fillStyle = 'lightgrey'
    this.ctx.fillRect(50, 0, 15, this.gameSize.h)
    this.ctx.fillRect(this.gameSize.w - 65, 0, 15, this.gameSize.h)
  },

  drawdash() {
    this.ctx.lineWidth = 14
    this.ctx.strokeStyle = 'lightgrey'
    this.ctx.beginPath()
    this.ctx.moveTo((this.gameSize.w / 2) - 7, 0)
    this.ctx.setLineDash([40, 10])
    this.ctx.lineTo((this.gameSize.w / 2) - 7, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createRoad() {
    this.drawfill()
    this.drawdash()
  },


  createCar() {
    this.car = new Car(this.ctx, this.gameSize.w / 2, this.gameSize.h - 120, 100, 100)


  },

  createObstacle() {

    let posX = (Math.floor((Math.random()) * 4) * 100)
    let width = Math.floor((Math.random()) * 400)
    let height = 100

    const obstacle = new Obstacle(this.ctx, posX, 10, width, height)
    this.obstacles.push(obstacle)

  },




  drawAll() {
    setInterval(() => {
      this.frameIndex % 35 === 0 ? this.createObstacle() : null

      this.frameIndex++
      this.clearAll()
      this.createRoad()
      this.car.draw()
      this.drawScore()
      this.obstacles.forEach(elm => {
        elm.move()
        elm.draw()
        if (elm.colision()) {
          this.obstacles = []
          this.result = confirm(`SCORE: ${carApp.frameIndex}    YOUR DRIVING SUCKS.      TRY AGAIN`)
        }

        this.result === true ? window.location.reload() : null
      })


      this.car.draw()
    }, 50)
  },

  drawScore() {
    this.ctx.fillStyle = 'red'
    this.ctx.font = '25px arial'
    this.ctx.fillText(this.frameIndex, 395, 25)
  },

  clearAll() {

    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  setEventHandlers() {
    document.addEventListener('keydown', event => {
      const { key } = event
      key === 'ArrowRight' ? this.car.moveRight() : null
      key === 'ArrowLeft' ? this.car.moveLeft() : null
      key === 'ArrowUp' ? this.car.moveUp() : null
      key === 'ArrowDown' ? this.car.moveDown() : null
    })
  },


};


window.onload = () => {

  document.getElementById('start-button').onclick = () => {
    startGame();
  }

  function startGame() {
    carApp.init()
  }
}

