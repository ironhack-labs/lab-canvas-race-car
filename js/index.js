window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.init()

  }
};



const game = {
  name: 'Race-Car App',
  description: 'Basic Moving Car HTML5 Canvas app',
  version: '1.0.0',
  author: 'Oliver Blanco',
  license: undefined,
  canvas: undefined,
  ctx: undefined,
  car1: undefined,
  canvasSize: {
    w: 500,
    h: 700
  },
  randomNum: Math.floor(500 * Math.random()),
  randomNum2: Math.floor(500 * Math.random()),
  num: 0,
  num1: 0,


  init() {

    this.canvas = document.querySelector('canvas')
    this.ctx = canvas.getContext('2d')
    this.setDimensions()

    this.drawCar()
    this.setEventListeners()


  },
  setDimensions() {
    this.canvas.setAttribute('width', this.canvasSize.w)
    this.canvas.setAttribute('height', this.canvasSize.h)
  },

  drawRoad() {

    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w - 450, this.canvasSize.h)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(450, 0, this.canvasSize.w, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(60, 0, this.canvasSize.w - 485, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(425, 0, this.canvasSize.w - 485, this.canvasSize.h)
    this.drawLines()


  },
  drawLines() {
    this.ctx.lineWidth = 15
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([50, 80])
    this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.h - 700)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
    this.ctx.closePath()
    this.ctx.stroke()


  },
  drawCar() {
    this.car1 = new Car(this.ctx, this.canvasSize.w / 2 - 25, this.canvasSize.h - 150, 50, 125, 'car.png')
    setInterval(() => {
      this.clear()
      this.drawRoad()
     this.drawObstacle() 

      this.drawObstacle()
      this.car1.draw()
      // this.collision()
    }, 50)
  },
  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car1.moveLeft() : null
      e.keyCode === 39 ? this.car1.moveRight() : null
    }
  },
  clear() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },
  drawObstacle() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.randomNum - 100, this.num, 100, 50)
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.randomNum2 - 100, this.num1 - 370, 100, 50)
    this.num += 10
    this.num1 += 10
    if (this.num > 700 && this.num1 > 700) {
      this.num = 0
      this.num1 = 0
      this.randomNum = Math.floor(500 * Math.random())
    }


  },
  collision() {
    if (this.car1.carPos.y - 30 === this.num &&
      this.car1.carPos.x + this.car1.carSize.w < this.num + 50
    ) {
      alert('hola')
    }
  }


}
// console.log(game.randomNum)

class Car {
  constructor(ctx, posX, posY, carW, carH, nameImg) {
    this.ctx = ctx
    this.carPos = {
      x: posX,
      y: posY
    }
    this.img = new Image()
    this.img.src = `images/${nameImg}`
    this.carSize = {
      w: carW,
      h: carH
    }
  }
  draw() {
    this.ctx.drawImage(this.img, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)

  }
  moveLeft() {
    this.carPos.x >= 60 ? this.carPos.x -= 10 : null

  }
  moveRight() {
    this.carPos.x < 400 ? this.carPos.x += 10 : null
  }

}