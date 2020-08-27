const firtApp = {
  canvasId: undefined,
  ctx: undefined,
  car: undefined,
  obstacle: undefined,
  frames: 0,
  obstaclesDensity: 20,
  canvasSize: {
    w: undefined,
    h: undefined


  },

  init(id) {
    this.canvasId = id
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.setDimensions()
  },


  setDimensions() {
    document.getElementById(this.canvasId).setAttribute('width', window.innerWidth.right)
    document.getElementById(this.canvasId).setAttribute('height', window.innerHeight)
    this.canvasSize = {
      w: window.innerWidth / 2,
      h: window.innerHeight
    }
    console.log(this.canvasSize)
  },

  drawFilledSquare() {
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(5, 20, this.canvasSize.w - 50, this.canvasSize.h - 50)
    //this.ctx.fillStyle = 'green'
    //this.ctx.fillRect(250, 20, this.canvasSize.w - 50, this.canvasSize.h - 50)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(250, 20, 50, this.canvasSize.h - 50)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(7, 20, 50, this.canvasSize.h - 50)
  },

  drawContinuousLines(x1, y1, x2, y2) {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = "white"
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, this.canvasSize.h)
    this.ctx.stroke()
  },

  drawDashedLines() {
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = "white"
    this.ctx.beginPath()
    this.ctx.setLineDash([40, 80])
    this.ctx.moveTo(150, 0)
    this.ctx.lineTo(150, this.canvasSize.h)
    this.ctx.closePath()
    this.ctx.stroke()
  },

  drawCar(imageName) {
    this.car = new Car(this.ctx, 100, this.canvasSize.h - 95, 50, 70, this.canvasSize, imageName)
    this.obstacle = new obstacle(this.ctx, 0, 100, 50, 70, this.canvasSize, "arrows.png")
    this.obstacle2 = new obstacle(this.ctx, 0, 200, 50, 70, this.canvasSize, "arrows.png")

    setInterval(() => {
      this.frames++
      //this.frames % this.obstaclesDensity === 0 ? this.generateObstacle() : null
      this.clearScreen()
      this.car.draw()
      this.obstacle.draw()
      this.obstacle2.draw()
    }, 50)
  },

  setEventListeners() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car.move('left') : null
      e.keyCode === 39 ? this.car.move('right') : null
    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.drawFilledSquare()
    //this.drawContinuousLines(70, 0, 70)
    //this.drawContinuousLines(235, 0, 235)
    this.drawDashedLines()
    //this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  }
}

class Car {
  constructor(ctx, posX, posY, carW, carH, canvasSize, imageName) {
    this.ctx = ctx
    this.carPos = {
      x: posX,
      y: posY
    }
    this.carSize = {
      w: carW,
      h: carH
    }
    this.canvasSize = canvasSize
    this.imageName = imageName

    this.imageInstance = undefined

    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `images/${this.imageName}`
  }

  draw() {
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  move(dir) {
    dir === 'left' ? this.carPos.x -= 5 : null
    dir === 'right' ? this.carPos.x += 5 : null
  }
}

class obstacle {

  constructor(ctx, posX, posY, carW, carH, canvasSize, imageName) {
    this.ctx = ctx
    this.carPos = {
      x: posX,
      y: posY
    }
    this.carSize = {
      w: carW,
      h: carH
    }
    this.canvasSize = canvasSize
    this.imageName = imageName

    this.imageInstance = undefined

    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `images/${this.imageName}`
  }

  draw() {
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    this.carPos.y += 5
  }
}




//function startGame() { }



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    firtApp.init('canvas')
    firtApp.drawFilledSquare()
    firtApp.drawContinuousLines(70, 0, 70)
    firtApp.drawContinuousLines(235, 0, 235)
    firtApp.drawDashedLines()
    firtApp.drawCar("car.png")
    firtApp.setEventListeners()


  };
}
