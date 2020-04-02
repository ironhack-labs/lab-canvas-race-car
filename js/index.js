window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame.init('canvas')
    //startGame.drawFilledSquare()
    //startGame.drawLine()
    //startGame.drawImage()
  };
}


const startGame = {
  name: 'Canvas Race Car',
  author: 'Dayan Rojas',
  canvasDom: undefined,
  ctx: undefined,
  canvasSize: {
    height: 700,
    width: 500
  },
  car: undefined,
  init(id) {
    this.canvasDom = document.getElementById(id)
    this.canvasDom.width = this.canvasSize.width
    this.canvasDom.height = this.canvasSize.height
    this.ctx = this.canvasDom.getContext('2d')
    this.car = new Car(this.ctx, 150, 150, 150, 300, this.canvasSize)
    this.drawFilledSquare()
    this.drawLine()
    this.car.drawImage()
  },
  drawFilledSquare() {
    this.ctx.fillStyle = '#1c8200'
    this.ctx.fillRect(0, 0, 630, 700)
    this.ctx.fillStyle = '#808080'
    this.ctx.fillRect(40, 0, 420, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(60, 0, 20, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(420, 0, 20, 700)
    //clearRect(x, y, width, height)
  },
  drawLine() {
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 8
    this.ctx.setLineDash([30, 30])
    this.ctx.beginPath()
    this.ctx.moveTo(250, this.canvasSize.height)
    this.ctx.lineTo(250, 10)
    this.ctx.stroke()
  },



}

class Car {
  constructor(ctx, posx, posy, width, height) {
    this.ctx = ctx
    this.posx = 240
    this.posy = 520
    this.width = 60
    this.height = 100
    this.car = undefined
    this.setEventListeners()
  }
  drawImage() {
    this.car = new Image()
    this.car.src = "images/car.png"
    this.car.onload = () => { this.ctx.drawImage(this.car, this.posx, this.posy, this.width, this.height) }
  }
  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car.move('right') : null
      e.keyCode === 39 ? this.car.move('left') : null
    }
  }

}
