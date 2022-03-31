const RaceCar = {
  name: 'Race Car App',
  description: '',
  version: '1.0.0',
  author: 'PQ',
  license: undefined,
  canvasNode: undefined,
  ctx: undefined,
  car: undefined,
  blocks: [],
  gameSize: { w: undefined, h: undefined },
  framesIndex: 0,

  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    this.setDimensions()
    this.startGame
    this.createCar()
    this.createBritney()

    this.createDad()
    this.setEventListeners()




  },
  setDimensions() {
    this.gameSize = {
      w: 500,
      h: 700
    }
    this.canvasNode.setAttribute('width', this.gameSize.w)
    this.canvasNode.setAttribute('height', this.gameSize.h)
  },
  drawRoad() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 40, this.gameSize.h)
    this.ctx.fillRect(this.gameSize.w - 40, 0, 40, this.gameSize.h)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(50, 0, 10, this.gameSize.h)
    this.ctx.fillRect(this.gameSize.w - 60, 0, 10, this.gameSize.h)

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([40, 20])      // <--
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()


  },

  createCar() {
    this.car = new Car(this.ctx, this.gameSize.w / 2 - 35, this.gameSize.h - 150, 70, 100)
  },

  createBritney() {
    this.britney = new Britney(this.ctx, 160, 160, 160, 120, 0.2)
  },

  createDad() {
    this.dad = new Dad(this.ctx, 50, 50, 100, 120)
  },

  // createBlocks() {
  //   const newBlock = new Block(this.ctx, Math.random() * this.gameSize.w, 0, Math.random() * 100 + 100, 40)
  //   this.blocks.push(newBlock)

  // },



  startGame() {

    setInterval(() => {
      this.clearAll()
      this.drawAll()
      this.britney.move()
      this.dad.move()
      this.framesIndex++
    }, 30)

  },

  drawBlock() {

  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  britneyCollision() {
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    this.ctx.fillStyle = 'red'
    this.ctx.font = "60px Helvetica";
    this.ctx.fillText("Noooo ", 100, 250)
    this.ctx.fillText("a Britney ", 100, 350)
    this.ctx.fillText("nooooo", 100, 450)

  },

  dadCollision() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    this.ctx.fillStyle = 'black'
    this.ctx.font = "60px Helvetica";
    this.ctx.fillText("Enhorabuena,", 100, 250)
    this.ctx.fillText("has salvado ", 100, 350)
    this.ctx.fillText("a Britney", 100, 450)
  },



  drawAll() {
    this.drawRoad()
    this.car.draw()
    this.britney.draw()
    this.dad.draw()
    if (this.car.carPos.x < this.britney.britneyPos.x + this.britney.britneySize.w &&
      this.car.carPos.x + this.car.carSize.w > this.britney.britneyPos.x &&
      this.car.carPos.y < this.britney.britneyPos.y + this.britney.britneySize.h &&
      this.car.carPos.y + this.car.carSize.h > this.britney.britneyPos.y) {
      this.britneyCollision()
    }

    if (this.car.carPos.x < this.dad.dadPos.x + this.dad.dadSize.w &&
      this.car.carPos.x + this.car.carSize.w > this.dad.dadPos.x &&
      this.car.carPos.y < this.dad.dadPos.y + this.dad.dadSize.h &&
      this.car.carPos.y + this.car.carSize.h > this.dad.dadPos.y) {
      this.dadCollision()
    }
  },










  setEventListeners() {
    document.addEventListener('keydown', event => {
      const { key } = event
      if (key === 'ArrowLeft' && this.car.carPos.x >= 80) {
        this.car.moveLeft()
      }
      if (key === 'ArrowRight' && this.car.carPos.x <= this.gameSize.w - 160) {
        this.car.moveRight()
      }
      if (key === 'ArrowUp' && this.car.carPos.y >= 40) {
        this.car.moveUp()
      }
      if (key === 'ArrowDown' && this.car.carPos.y <= this.gameSize.h - 140) {
        this.car.moveDown()
      }
    })

  },
}


