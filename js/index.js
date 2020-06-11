window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    app.init('canvas', 'car.png')
  };


  //function startGame() { }
};



const app = {
  name: 'Race car App',
  description: 'Basic drawing HTML5 Race car app',
  version: '1.0.0',
  author: 'Escarlata y Laura',
  license: undefined,
  canvasDom: undefined,
  ctx: undefined,
  posX: 190,
  posY: undefined,
  car: undefined,
  movement: 10,
  frames: 6,
  obsPosY: undefined,
  canvasSize: {
    w: window.innerWidth * .5,
    h: window.innerHeight
  },


  init(id, car) {
    this.canvasDom = document.getElementById(id)
    this.canvasDom.setAttribute('width', this.canvasSize.w)
    this.canvasDom.setAttribute('height', this.canvasSize.h)
    this.ctx = this.canvasDom.getContext('2d')
    this.posY = this.canvasSize.h / 2 - 100,
      this.drawBoard()
    this.setEventListener()
    this.car = new Image()
    this.car.src = `images/${car}`
    this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, 140, 200)
    this.updateDrawObstacles()
    this.obsPosY = 0

  },

  drawBoard() {
    this.ctx.fillStyle = '#008100'
    this.ctx.fillRect(0, 0, 40, this.canvasSize.h)

    this.ctx.fillStyle = '#808080'
    this.ctx.fillRect(40, 0, 10, this.canvasSize.h)

    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(50, 0, 10, this.canvasSize.h)

    this.ctx.fillStyle = '#808080'
    this.ctx.fillRect(60, 0, 400, this.canvasSize.h)

    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(460, 0, 10, this.canvasSize.h)

    this.ctx.fillStyle = '#808080'
    this.ctx.fillRect(470, 0, 10, this.canvasSize.h)

    this.ctx.fillStyle = '#008100'
    this.ctx.fillRect(480, 0, 40, this.canvasSize.h)

    this.ctx.beginPath()
    this.ctx.setLineDash([20, 20])
    this.ctx.strokeStyle = '#fff'
    this.lineWidth = 8
    this.ctx.moveTo(260 - 4, this.canvasSize.h)
    this.ctx.lineTo(260 - 4, 0)
    this.ctx.stroke()
  },

  drawCar() {
    this.ctx.drawImage(this.car, this.posX, this.posY, 140, 200)
  },

  drawObstacles() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(0, this.obsPosY, 380, 50)

  },

  updateDrawObstacles() {

    setInterval(() => {
      this.clearScreen()
      this.drawBoard()
      this.drawCar()
      this.drawObstacles()
      this.frames++
      this.obsPosY++
    }, 50)
  },

  moveCar(dir) {
    if (this.posX > 520 - 140) {
      dir === 'left' ? this.posX -= this.movement : null
    } else if (this.posX < 0) {
      dir === 'right' ? this.posX += this.movement : null

    } else {
      dir === 'left' ? this.posX -= this.movement : null
      dir === 'right' ? this.posX += this.movement : null
    }

    console.log(this.posX, this.posY)
    this.drawUpdateCar()
  },

  drawUpdateCar() {

    this.clearScreen()
    this.drawBoard()
    this.drawCar()
  },

  setEventListener() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.moveCar('left') : null
      e.keyCode === 39 ? this.moveCar('right') : null

    }
  },


  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  }
}