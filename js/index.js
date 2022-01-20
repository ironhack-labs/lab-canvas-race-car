const canvasRaceApp = {
  appName: 'Canvas Race app',
  author: 'Anna Ma Porras',
  version: '1.0.0',
  license: undefined,
  gameSize: { w: undefined, h: undefined },
  ctx: undefined,
  car: undefined,
  obstacles: [],
  init() {
    this.setContext()
    this.setSize()
    this.drawRoad()
    this.createCar()
    this.drawAll()
    this.setEventHandlers()
    this.createObstacles()


  },

  setContext() {
    this.ctx = document.querySelector('#canvas').getContext('2d')
  },
  setSize() {
    this.gameSize = {
      w: window.innerWidth / 2,
      h: window.innerHeight,
    }
    document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
    document.querySelector('#canvas').setAttribute('height', this.gameSize.h)
  },

  drawRoad() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(40, 0, this.gameSize.w - 80, this.gameSize.h)

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(50, 0)
    this.ctx.lineTo(50, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w - 50, 0)
    this.ctx.lineTo(this.gameSize.w - 50, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.setLineDash([60, 20])
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.setLineDash([0, 0])
  },

  createCar() {
    this.car = new Car(this.ctx, this.gameSize.w / 2 - 40, this.gameSize.h - 150, 80, 140)


  },

  createObstacles() {
    this.obstacles.push(
      new obstacles(this.ctx, this.gameSize.w / 2, this.gameSize.y / 2, 400, 140, 20),
      new obstacles(this.ctx, this.gameSize.w / 3, this.gameSize.y, 200, 50, 5)

    )
  },
  drawAll() {
    setInterval(() => {
      this.clearAll()
      this.obstacles.forEach(elm => {
        elm.move()
        elm.draw()
      })
      this.drawRoad()
      this.car.draw()



    }, 40)
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
  }

}
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    canvasRaceApp.init()
  }

}