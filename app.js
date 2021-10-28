
///APP Básica estática, sin dependencias de clases. Sin intervalo.

const basicApp = {
  name: 'Basic shapes app',
  description: 'Canvas app fro basic shapes drawing',
  version: '1.0.0',
  author: 'Teodoro López',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },

  init() {
    this.setContext()
    this.setDimensions()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#myCanvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasDOM.setAttribute("width", window.innerWidth)
    this.canvasDOM.setAttribute("height", window.innerHeight)
    this.canvasSize.width = window.innerWidth
    this.canvasSize.height = window.innerHeight
  },

  drawFilledRectangle() {
    this.ctx.fillRect(this.canvasSize.width / 2 - 50, this.canvasSize.height / 2 - 50, 100, 100)
    this.ctx.fillStyle = "purple";
    this.ctx.fillRect(this.canvasSize.width / 2 - 200, this.canvasSize.height / 2 - 25, 400, 50)
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, 1000, 10)
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.canvasSize.width - 1000, this.canvasSize.height - 10, 1000, 10)
  },

  drawEmptyRectangle() {
    this.ctx.strokeRect(this.canvasSize.width / 2 - 50, this.canvasSize.height / 2 - 50, 100, 100)
    this.ctx.strokeStyle = "red";
    this.ctx.strokeRect(this.canvasSize.width / 2 - 200, this.canvasSize.height / 2 - 25, 400, 50)
  },

  drawRegularLines() {

    this.ctx.beginPath()
    this.ctx.moveTo(0, 0)
    this.ctx.lineTo(this.canvasSize.width / 2, this.canvasSize.height / 2)
    this.ctx.lineTo(300, 700)
    this.ctx.fill()
    this.ctx.closePath()

    this.ctx.strokeStyle = 'red'
    this.ctx.lineWidth = 6

    this.ctx.beginPath()
    this.ctx.moveTo(0, 0)
    this.ctx.lineTo(300, 600)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  drawArc() {
    this.ctx.fillStyle = 'red'
    this.ctx.lineWidth = 20
    this.ctx.strokeStyle = "green"
    this.ctx.beginPath()
    this.ctx.arc(this.canvasSize.width / 2, this.canvasSize.height / 2, 200, 0, Math.PI * 2)
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.closePath()
  },

  insertImage() {
    const imageInstance = new Image()
    imageInstance.src = 'img/ball.png'
    imageInstance.onload = () => this.ctx.drawImage(imageInstance, 300, 300, 200, 200)
  }
}



//APP Con interación de usuario, dependencia con clase Ball. Setlisteners.

const interactionApp = {
  name: 'Interaction app',
  description: 'Canvas app for basic shapes interaction',
  version: '1.0.0',
  author: 'Teodoro López',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  ball: undefined,

  init() {
    this.setContext()
    this.setDimensions()
    this.setListeners()
    this.createBall()

    this.start()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#myCanvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasDOM.setAttribute("width", window.innerWidth)
    this.canvasDOM.setAttribute("height", window.innerHeight)
    this.canvasSize.width = window.innerWidth
    this.canvasSize.height = window.innerHeight
  },

  start() {
    setInterval(() => {
      this.clearScreen()
      this.ball.draw()
    }, 1000 / 50)
  },

  createBall() {
    this.ball = new Ball(this.ctx, 0, 0, 200, 200)
  },

  setListeners() {
    document.onkeydown = e => {
      console.log("La tecla: ", e.key)
      // if (e.key === 'ArrowLeft') {
      //   this.ball.moveLeft()
      // }
      // if (e.key === 'ArrowRight') {
      //   this.ball.moveRight()
      // }
      //Versión con operador ternario
      e.key === 'ArrowLeft' ? this.ball.moveLeft() : null
      e.key === 'ArrowRight' ? this.ball.moveRight() : null
    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
  }
}

class Ball {
  constructor(ctx, posX, posY, width, height) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.width = width
    this.height = height

    this.image = undefined

    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = 'img/ball.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    console.log("Muevo a la izquierda", this.posX)
    this.posX -= 20
  }

  moveRight() {
    console.log("Muevo a la derecha", this.posX)
    this.posX += 20
  }
}


//APP con animaciones automáticas, dependencia con clase Camel. 

const animationApp = {
  name: 'Animation app',
  description: 'Canvas app for shapes animating',
  version: '1.0.0',
  author: 'Teodoro López',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { w: undefined, h: undefined },
  camels: [],
  FPS: 50,
  framesCounter: 0,


  init() {
    this.setContext()
    this.setDimensions()
    this.createCamels()

    this.start()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#myCanvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasDOM.setAttribute("width", window.innerWidth)
    this.canvasDOM.setAttribute("height", window.innerHeight)
    this.canvasSize.width = window.innerWidth
    this.canvasSize.height = window.innerHeight
  },

  start() {
    this.intervalId = setInterval(() => {
      this.framesCounter++
      this.framesCounter % 40 === 0 ? console.log("createObstacles") : null
      this.framesCounter % 100 === 0 ? this.stop() : null
      this.clearScreen()
      this.drawAll()
      this.moveAll()
    }, 1000 / this.FPS)
  },


  drawAll() {
    this.camels.forEach(camel => camel.draw())
  },

  moveAll() {
    this.camels.forEach(camel => camel.move())
  },

  createCamels() {
    this.camels.push(new Camel(this.ctx, 0, 20, this.canvasSize, 200, 200, 5))
    this.camels.push(new Camel(this.ctx, 0, 200, this.canvasSize, 100, 100, 3))
    this.camels.push(new Camel(this.ctx, 0, 400, this.canvasSize, 400, 400, 7))
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
  },

  stop() {
    clearInterval(this.intervalId)
  }
}

class Camel {
  constructor(ctx, posX, posY, canvasSize, width, height, speed) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.canvasSize = canvasSize

    this.width = width
    this.height = height

    this.speed = speed

    this.image = undefined

    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = 'img/camel.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  move() {
    if (this.posX + this.width > this.canvasSize.width || this.posX < 0) {
      this.turn()
    }
    this.posX += this.speed
  }

  turn() {
    this.speed = this.speed * -1
  }
}