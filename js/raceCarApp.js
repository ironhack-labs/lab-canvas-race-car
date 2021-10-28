const raceCarApp = {
    name: 'Canvas Race Car app',
    description: 'Canvas racing game',
    version: '1.0.0',
    author: 'Miky Abad',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: 500, h: 600 },
    obstacles: [],
    FPS: 60,
    framesCounter: 0,
 

    init() {
      this.setContext()
      this.setDimensions()
      this.start()
      this.drawRoad() 
      this.createCar()
      this.setListeners()
    },

    setContext() {
      this.canvasDOM = document.querySelector('#canvas')
      this.ctx = this.canvasDOM.getContext("2d")
    },


    setDimensions() {
      this.canvasSize.w = window.innerWidth
      this.canvasSize.h = window.innerHeight
    },


    drawRoad() {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(25, 0, 450, this.canvasSize.h)
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(50, 0, 400, this.canvasSize.h)
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(75, 0, 350, this.canvasSize.h)
      this.ctx.setLineDash([4, 14]);
      this.ctx.beginPath();
      this.ctx.strokeStyle = "white"
      this.ctx.lineWidth = 10
      this.ctx.setLineDash([20, 40])
      this.ctx.moveTo(250, 0);
      this.ctx.lineTo(250, this.canvasSize.h);
      this.ctx.stroke();
    },
    
    start() {
      this.intervalId = setInterval(() => {
        this.clearScreen()
        this.drawRoad()
        // this.createObstacle()
        if (this.framesCounter % 120 === 0) {
          this.createObstacle()
          this.framesCounter = 0
        }
        this.obstacles.forEach((obs) => { obs.draw() })
        this.moveAllObs() 
        this.car.draw()
        this.framesCounter++
      }, 1000 / this.FPS)
    },

    createObstacle() {
      this.randomPosX = Math.floor((Math.random() * 200) + 50)
      this.randomWidth = Math.floor((Math.random() * 200) + 100)
      this.randomHeight = Math.floor((Math.random() * 20) + 25)
      this.randomSpeed = Math.floor((Math.random() * 10) + 1)
      this.obstacles.push(new Obstacle
        (this.ctx, this.randomPosX, 20, this.randomWidth, this.randomHeight, this.randomSpeed))
    },

    createCar() {
      this.car = new Car(this.ctx, 212, this.canvasSize.h - 140, 75, 100)
    },

    setListeners() {
      document.onkeydown = e => {
        e.key === 'ArrowLeft' ? this.car.moveLeft() : null
        e.key === 'ArrowRight' ? this.car.moveRight() : null
      }
    },

    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    moveAllObs() {
      this.obstacles.forEach((obs) => {
        obs.move()
      })
    },  

    stop() {
      clearInterval(this.intervalId)
    }
   
};


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
    this.image.src = '../images/car.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    this.posX > 10 ? this.posX -= 30 : null
  }

  moveRight() {
    this.posX < 425 ? this.posX += 30 : null
  }
}


class Obstacle {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.width = width
    this.height = height

    this.speed = speed

    this.canvasSize = { height: 600 }

    this.init()
  }

  init() {
    this.draw()
  }

  draw() {
    this.ctx.fillStyle = "#880007";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height, this.speed)
  }

  move() {
    this.posY += 1 * this.speed
  }
}
