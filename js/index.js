window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startGame('canvas');
  };

};

const game = {
  name: 'Canvas Race',
  author: 'Ignacio  y Francisco',
  canvasDom: undefined,
  ctx: undefined,
  canvasSize: {
    height: 700,
    width: 500
  },
  car: undefined,
  obstacle: [],
  frames: 0,

  startGame(id) {
    console.log('el juego ha empezado')
    this.canvasDom = document.getElementById(id)
    this.canvasDom.width = this.canvasSize.width
    this.canvasDom.height = this.canvasSize.height
    this.ctx = this.canvasDom.getContext('2d')
    this.setEventListeners()
    this.car = new Car(this.ctx, this.canvasSize.width / 2 + 50, this.canvasSize.height / 2 + 180, 50, 100, this.canvasSize)
    this.car.init()
    this.interval = setInterval(() => {
      this.clearScreen()
      this.frames++
      this.drawRoad()
      // this.drawCenterLine()
      this.car.drawCar()
      this.frames % 100 === 0 ? this.generateObstacle() : null
      this.obstacle.forEach((elm) => {
        elm.lineSpawner()
        elm.lineMovement()
        elm.colision(this.car,elm) ? console.log('pollicios') : null
      })





    }, 10)
  },
  drawRoad() {
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(this.canvasSize.width / 2 - 100, this.canvasSize.height / 2 - 300, 350, 600)
    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(this.canvasSize.width / 2 - 75, this.canvasSize.height / 2 - 300, 300, 600)
    this.ctx.strokeStyle = "white"
    this.ctx.lineWidth = 8
    this.ctx.beginPath()

    this.ctx.moveTo(this.canvasSize.width / 2 - 65, this.canvasSize.height / 2 - 300)
    this.ctx.lineTo(this.canvasSize.width / 2 - 65, 650)
    this.ctx.stroke()
    this.ctx.moveTo(this.canvasSize.width / 2 + 215, this.canvasSize.height / 2 - 300)
    this.ctx.lineTo(this.canvasSize.width / 2 + 215, 650)
    this.ctx.stroke()
    this.ctx.closePath()
  },
  // drawCenterLine(){
  //   this.ctx.beginPath()
  //   this.ctx.setLineDash([40, 30]), 0 //dash con parametros
  //   this.ctx.strokeStyle = 'white'
  //   this.ctx.lineWidth = 8
  //   this.ctx.moveTo(this.canvasSize.width / 2 -4, 0)
  //   this.ctx.moveTo(this.canvasSize.width / 2 -4, this.canvasSize.height)
  //   this.ctx.stroke()

  // },

  generateObstacle() {
    this.obstacle.push(new Obstacle(this.ctx, this.canvasSize.width / 2 - 100, this.canvasSize.height / 2 - 300, 100, 10, this.canvasSize))
  },


  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
  },
  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car.moveCar('left') : null
      e.keyCode === 39 ? this.car.moveCar('right') : null
    }
  },


}

class Car {
  constructor(ctx, posX, posY, carW, carH, canvasSize) {
    this.ctx = ctx
    this.posX = posX
    this.posY = posY
    this.carW = carW
    this.carH = carH
    this.canvasSize = {
      width: canvasSize.width,
      height: canvasSize.height
    }
    this.car = undefined
    this.spd = 100
  }
  init() {
    this.car = new Image()
    this.car.src = "images/car.png"
    this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  }
  moveCar(dir) {
    dir === 'right' ? this.posX += this.spd : null
    dir === 'left' ? this.posX -= this.spd : null
  }
  drawCar() {
    this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  }

}
class Obstacle {
  constructor(ctx, posX, posY, obsW, obsH, canvasSize) {
    this.ctx = ctx
    this.posX = Math.floor(Math.random() * (300 - 50)) + 1
    this.posY = posY
    this.obW = 250
    this.obsH = obsH
    this.canvasSize = {
      width: canvasSize.width,
      height: canvasSize.height
    }
    this.obs = undefined
    this.speed = 2

  }
  lineSpawner() {
    this.ctx.fillStyle = "pink"
    this.ctx.fillRect(this.posX, this.posY, this.obW, this.obsH)
  }
  lineMovement() {
    this.posY += this.speed
  }
  colision(car, obstacle) {
    return (car.x < obstacle.x + obstacle.width &&
      car.x + car.width > obstacle.x &&
      car.y < obstacle.y + obstacle.height &&
      car.height + car.y > obstacle.y) 
    }
}