window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }

};
 
function starGame() {
  app.init('canvas')
};


const app = {
  name: 'Canvas App',
  description: 'Canvas race car',
  version: '1.0.0',
  author: 'Pablo de Tuero & Melissa M',
  license: undefined,
  canvasDom: undefined,
  ctx: undefined,
  car: undefined,
  frames: 0,
  canvasSize: {
      w: window.innerWidth * .5,
      h: window.innerHeight
  },
  carW: 50,
  carH: 100,
  posX: undefined,
  init(id) {
            this.canvasDom = document.getElementById(id)
            this.ctx = this.canvasDom.getContext('2d')
            this.drawFilledSquares()
            this.drawLines()
            this.drawCar('car.png')
            this.setEventListeners()
        },
  drawFilledSquares() {
            this.ctx.beginPath()
            this.ctx.fillStyle = 'green'
            this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
            this.ctx.stroke()

            this.ctx.beginPath()
            this.ctx.fillStyle = 'gray'
            this.ctx.fillRect( 50, 0, this.canvasSize.w-100, this.canvasSize.h)
            this.ctx.stroke()
        },
  drawLines() {
            this.ctx.beginPath()
            this.ctx.strokeStyle = 'white'
            this.ctx.lineWidth = 8
            this.ctx.moveTo(60, 0)
            this.ctx.lineTo(60, this.canvasSize.h)
            this.ctx.stroke()

            this.ctx.beginPath()
            this.ctx.strokeStyle = 'white'
            this.ctx.lineWidth = 8
            this.ctx.moveTo(this.canvasSize.w -60, 0)
            this.ctx.lineTo(this.canvasSize.w -60, this.canvasSize.h)
            this.ctx.stroke()

            this.ctx.beginPath()
            this.ctx.setLineDash([40, 20])
            this.ctx.strokeStyle = 'white'
            this.ctx.lineWidth = 8
            this.ctx.moveTo(this.canvasSize.w /2 -4, 25)
            this.ctx.lineTo(this.canvasSize.w /2 -4, this.canvasSize.h)
            this.ctx.stroke()
            
        },
  drawCar(name){
    this.car = new Car(this.ctx, name,this.canvasSize.w /2 - 25, this.canvasSize.h -100, this.carW, this.carH, this.canvasSize);
    this.car.initCar()
        setInterval(() => {
            this.frames++
            this.car.draw()
        }, 20)
  },

  setEventListeners() {

    document.onkeydown = e => {
        e.keyCode === 37 ? this.car.move('left') : null
        e.keyCode === 39 ? this.car.move('right') : null
    }
},
  


};

class Car {
    constructor(ctx, name, posX, posY, carW, carH, canvasSize) {
        this.ctx = ctx
        this.name = name
        this.posX = posX
        this.posY = posY
        this.carW = carW
        this.carH = carH
        this.canvasSize = canvasSize
        this.car = undefined
    }

    initCar() {
        this.car = new Image()
        this.car.src = `images/${this.name}`
    }
    move(dir) {
      dir === 'left' ? this.posX -= this.vel : null
      dir === 'right' ? this.posX += this.vel : null
  }
    draw() {
      this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  }
}
console.log(starGame())
/* app.init('canvas')
app.drawFilledSquares()
app.drawLines()
app.drawCar('car.png') */

