const carApp = {

  ctx: undefined,
  canvasDom: undefined,
  width: 500,
  height: 700,
  car: undefined,
  blocks: [],
  counter: 0,

  init(id) {

    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext("2d")
    this.car = new Car(this.ctx, this.width / 2 - 20, this.height - 150, 50, 100)
    this.drawRoad()
    this.drawWhiteLines()
    this.drawMovingCar()
    this.setEventListeners()

    setInterval(() => {
      this.clearScreen()
      this.drawRoad()
      this.drawWhiteLines()
      this.car.draw()
      this.randomPush()
      this.randomBlock()
      this.counter += 20
    }, 20)

  },

  randomPush() {
    if (this.counter % 1000 === 0) {
      this.blocks.push(new Blocks(this.ctx, this.car.carW))
    }

  },

  randomBlock() {
    this.blocks.forEach(elm => elm.moveBlocks())
  },

  clearScreen() {

    this.ctx.clearRect(0, 0, this.width, this.height)

  },

  drawRoad() {

    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, this.width, this.height)

    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(50, 0, this.width - 100, this.height)

  },

  drawWhiteLines() {

    this.ctx.setLineDash([100, 0])
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = "white"
    this.ctx.beginPath()
    this.ctx.moveTo(this.width - 435, 0)
    this.ctx.lineTo(this.width - 435, this.height)
    this.ctx.stroke()

    this.ctx.setLineDash([100, 0])
    this.ctx.beginPath()
    this.ctx.moveTo(this.width - 65, 0)
    this.ctx.lineTo(this.width - 65, this.height)
    this.ctx.stroke()


    this.ctx.setLineDash([30, 30])
    this.ctx.beginPath()
    this.ctx.moveTo(this.width / 2, 20)
    this.ctx.lineTo(this.width / 2, this.height)
    this.ctx.stroke()

  },

  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === 39 ? this.car.move("right") : null
      e.keyCode === 37 ? this.car.move("left") : null
    }
  },

  drawMovingCar() {

    this.car.init()

  }


}

class Car {

  constructor(ctx, posX, posY, carW, carH) {
    this.ctx = ctx
    this.posX = posX
    this.posY = posY
    this.carW = carW
    this.carH = carH
    this.car = undefined
    this.vel = 7
  }

  init() {

    this.car = new Image()
    this.car.src = 'images/car.png'
    this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)

  }

  move(dir) {

    this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)

    if (this.posX <= 55) {
      this.posX = 55
    }

    if (this.posX >= 405) {
      this.posX = 405
    }

    dir === 'right' ? this.posX += this.vel : null
    dir === 'left' ? this.posX -= this.vel : null

  }

  draw() {

    this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)

  }


}

class Blocks {

  constructor(ctx, carW) {
    this.ctx = ctx
    this.posY = 0
    this.blockW = Math.random() * (400 - carW)
    this.posX = Math.random() * (400 - this.blockW) + 50
    this.blockH = 25
    this.vel = 2
    console.log(this.blockW)
  }

  init() {

    this.drawBrown()
    this.moveBlocks()

  }

  drawBrown() {

    this.ctx.fillStyle = "brown"
    this.ctx.fillRect(this.posX, this.posY, this.blockW, this.blockH)

  }

  moveBlocks() {

    this.drawBrown()
    this.posY += this.vel

  }

}










