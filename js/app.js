const roadPainter = {
    name: 'Road Painter',
    description: 'App for painting the road',
    version: '1.0.0',
    author: 'Miguel Munoz',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
  
    init() {
      this.setContext()
      this.setDimensions()

      this.drawFilledRectangle()
      this.drawLines()
    },
  
    setContext() {
      this.canvasDOM = document.querySelector("#canvas")
      this.ctx = this.canvasDOM.getContext("2d")
    },
  
    setDimensions() {
      this.canvasDOM.setAttribute("width", 500)
      this.canvasDOM.setAttribute("height", 700)
    //   this.canvasSize.width = window.innerWidth
    //   this.canvasSize.height = window.innerHeight
    },

    drawFilledRectangle() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(40, 0, 420, 700)
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(55, 0, 15, 700)
        
      },

    drawLines () {
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(55, 0, 15, 700)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(430, 0, 15, 700)

        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.setLineDash([30, 25])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    // insertImage() {
    //     const imageInstance = new Image()
    //     imageInstance.src = '../images/carraco.png'
    //     imageInstance.onload = () => this.ctx.drawImage(imageInstance, 225, 600, 50, 100)
    // }

    // createCar() {
    //     this.car = new Car(this.ctx, 225, 590, 50, 100)
    // },

    // clearScreen() {
    //     this.ctx.clearRect(0, 0, 500, 700)
    //   }

}

const carMove = {
    name: 'Car Move',
    description: 'Move car and obstacles movement',
    version: '1.0.0',
    author: 'Miguel Munoz',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
    car: undefined,
    obstacles: [],
    framesCounter: 0,
    randomPositionX: 0,
    randomWidth: 0,
  
    init() {
      this.setContext()
      this.setDimensions()

      this.setListeners()
      this.createCar()
      this.createObstacles()
      this.start()
    },
  
    setContext() {
      this.canvasDOM = document.querySelector("#canvas")
      this.ctx = this.canvasDOM.getContext("2d")
    },
  
    setDimensions() {
      this.canvasDOM.setAttribute("width", 500)
      this.canvasDOM.setAttribute("height", 700)
    //   this.canvasSize.width = window.innerWidth
    //   this.canvasSize.height = window.innerHeight
    },

    start() {
    setInterval(() => {
      this.framesCounter++
      this.framesCounter % 100 === 0 ? this.createObstacles() : null
      this.clearScreen()
      roadPainter.drawFilledRectangle()
      roadPainter.drawLines()
      this.car.draw()
      this.drawAll()
      this.moveAll()
    }, 1000 / 50)
    },

    createCar() {
        this.car = new Car(this.ctx, 225, 590, 50, 100)
    },

    drawAll() {
        this.obstacles.forEach(obstacle => obstacle.drawObstacle())
    },
    
    moveAll() {
        this.obstacles.forEach(obstacle => obstacle.move())
    },

    createObstacles() {
        this.randomPositionX = 70 + Math.floor(Math.random() * 250);
        this.randomWidth = Math.floor(Math.random() * 250+15);
        this.obstacles.push(new Obstacle(this.ctx, this.randomPositionX, 0, this.randomWidth, 25, 6))
    },

    setListeners() {
        document.onkeydown = e => {
          e.key === 'ArrowLeft' ? this.car.moveLeft() : null
          e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
      },

    clearScreen() {
        this.ctx.clearRect(0, 0, 500, 700)
      }

}



class Car {
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
    this.image.src = './images/carraco.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    if (this.posX > 70) {
    this.posX -= 15
    } else {
      null
    }
    }

  moveRight() {
    if (this.posX < 380) {
    this.posX += 15
    } else {
        null
    }
  }
}

class Obstacle {
    constructor(ctx, posX, posY, width, height, speed) {
      this.ctx = ctx
  
      this.posX = posX
      this.posY = posY
  
    //   this.canvasSize = canvasSize
  
      this.width = width
      this.height = height
  
      this.speed = speed
  
      this.image = undefined
  
    //   this.init()
    }
  
    // init() {
    // //   this.drawObstacle()
    // }
  
    drawObstacle() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
  
    move() {
      this.posY += this.speed
    }
  
  }