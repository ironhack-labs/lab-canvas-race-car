window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    basicShapesApp.init()
  }

  //   init() {}
}


const basicShapesApp = {
  name: 'Race Island App',
  description: 'Canvas Race App for practicing',
  version: '1.0.0',
  author: 'Pablo Molleda',
  license: undefined,
  repository: undefined,
  canvasDOM: undefined, // aquí metemos todas las ppdades del DOM
  ctx: undefined, // aquí metemos las ppdes del contexto
  canvasSize: { w: undefined, h: undefined },
  car: undefined,
  blocks: [],


  init() {
    this.setContext()
    this.drawRacingBoard()
    this.setDimensions()
    this.drawRacingBoard()
    this.createCar()
    this.drawAllCars()
    this.start()
    this.drawBlocks()
    this.colision()
  },

  // Aquí es dónde desarrollo el contexto.

  setContext() {

    this.canvasDOM = document.querySelector('#canvas') // selecciono el canvas
    this.ctx = this.canvasDOM.getContext('2d') // le doy al canvas el contexto 2d
  },

  // desarrollo de las dimensiones, que no hace falta porque en este lab lo preconfiguramos en el html

  setDimensions() {
    this.canvasSize.w = 500 // window pq es el cntx global y innerWithd su ppdad para ello
    this.canvasSize.h = 700 // window pq es el cntx global y innerHeight su ppdad para ello
    this.canvasDOM.setAttribute('width', 500) // le doy nuevo attribute y le digo su valor
    this.canvasDOM.setAttribute('height', 700) // le doy nuevo attribute y le digo su valor
  },

  //let's paint!

  drawRacingBoard() {
    // garden and main road
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h) // seleccionamos tamaño y posición del objeto
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

    // road lines
    this.ctx.strokeStyle = 'black'
    this.ctx.lineWidth = 2
    this.ctx.beginPath()
    this.ctx.moveTo(50, 0)
    this.ctx.lineTo(50, 700)
    this.ctx.moveTo(450, 0)
    this.ctx.lineTo(450, 700)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.moveTo(70, 0)
    this.ctx.lineTo(70, 700)
    this.ctx.moveTo(430, 0)
    this.ctx.lineTo(430, 700)
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250, 50)
    this.ctx.moveTo(250, 75)
    this.ctx.lineTo(250, 125)
    this.ctx.moveTo(250, 150)
    this.ctx.lineTo(250, 200)
    this.ctx.moveTo(250, 225)
    this.ctx.lineTo(250, 275)
    this.ctx.moveTo(250, 300)
    this.ctx.lineTo(250, 350)
    this.ctx.moveTo(250, 375)
    this.ctx.lineTo(250, 425)
    this.ctx.moveTo(250, 450)
    this.ctx.lineTo(250, 500)
    this.ctx.moveTo(250, 525)
    this.ctx.lineTo(250, 575)
    this.ctx.moveTo(250, 600)
    this.ctx.lineTo(250, 650)
    this.ctx.moveTo(250, 675)
    this.ctx.lineTo(250, 700)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  createCar() {
    this.car = new Car(this.ctx, this.canvasSize.w / 2 - 25, this.canvasSize.h - 100, 50, 75, 'car.png')
  },

  drawAllCars() {
    this.drawRacingBoard()
    this.car.draw()

  },

  setListeners() {
    document.onkeyup = e => {
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
  },
  start() {
    this.createCar()
    this.setListeners()
    this.createBlocks()


    setInterval(() => {
      this.clearScreen()
      this.moveBlocks()
      this.drawAllCars()
      this.drawBlocks()


    }, 70)
  },

  drawBlocks() {
    this.blocks.forEach(elm => elm.createBlock())
  },

  moveBlocks() {
    this.blocks.forEach(elm => elm.move())
  },

  createBlocks() {
    const block1 = new Block(this.ctx, 70, 0, 80, 30, 1.5, this.canvasSize)
    const block2 = new Block(this.ctx, 150, 150, 150, 30, 1.5, this.canvasSize)
    const block3 = new Block(this.ctx, 200, 350, 175, 30, 1.5, this.canvasSize)
    const block4 = new Block(this.ctx, 130, -350, 220, 30, 1.5, this.canvasSize)
    const block5 = new Block(this.ctx, 230, -250, 200, 30, 1.5, this.canvasSize)
    const block6 = new Block(this.ctx, 200, -400, 250, 30, 1.5, this.canvasSize)
    const block7 = new Block(this.ctx, 120, -550, 170, 30, 1.5, this.canvasSize)
    const block8 = new Block(this.ctx, 230, -650, 230, 30, 1.5, this.canvasSize)
    const block9 = new Block(this.ctx, 90, -750, 120, 30, 1.5, this.canvasSize)
    const block10 = new Block(this.ctx, 120, -50, 100, 30, 1.5, this.canvasSize)
    const block11 = new Block(this.ctx, 230, -530, 180, 30, 1.5, this.canvasSize)
    const block12 = new Block(this.ctx, 130, -150, 270, 30, 1.5, this.canvasSize)

    this.blocks.push(block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h) // Se lo carga todo
  },

  colision() {

    for (let i = 0; i < this.blocks.length; i++) {
      if (this.car.carPos.x < this.blocks[i].blockPos.x + this.blocks[i].blockSize.w &&
        this.car.carPos.x + this.car.carSize.w > this.blocks[i].blockPos.x &&
        this.car.carPos.y < this.blocks[i].blockPos.y + this.blocks[i].blockSize.h &&
        this.car.carPos.y + this.car.carSize.h > this.blocks[i].blockPos.y) {
        console.log('colision')

      }
    }
  }
}



    class Car {

      constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImg) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImg = carImg
        this.imageInstance = undefined

        this.init()
      }

      init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImg}`
      }

      draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
      }

      moveLeft() {

        this.carPos.x >= 70 ? this.carPos.x -= 20 : null

      }

      moveRight() {
        this.carPos.x <= 500 - 70 - 50 ? this.carPos.x += 20 : null
      }

    }

    class Block {

      constructor(ctx, posX, posY, width, height, speed, canvasSize) {
        this.ctx = ctx
        this.blockPos = { x: posX, y: posY }
        this.blockSize = { w: width, h: height }
        this.blockSpeed = speed
        this.canvasSize = canvasSize

        this.init()

      }

      init() {
        this.createBlock()
        this.move()
      }

      createBlock() {
        this.ctx.fillStyle = '#5c4747'
        this.ctx.fillRect(this.blockPos.x, this.blockPos.y, this.blockSize.w, this.blockSize.h)
      }

      move() {

        this.blockPos.y += this.blockSpeed
      }

    }



