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
      this.drawRoad() 
      this.setListeners()
      this.createCar()
      this.createObstacles()

      this.start()
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
        this.framesCounter++
        this.framesCounter % 100 === 0 ? this.stop() : null
        this.clearScreen()
        this.drawRoad()
        this.car.draw()
        this.drawAll()
        this.moveAll()  
      }, 1000 / this.FPS)
    },

    createCar() {
      this.car = new Car(this.ctx, 212, 475, 75, 100)
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

    createObstacles() {
      this.obstacles.push(new Obstacle(this.ctx, 0, 20, 200, 200, 5))
      this.obstacles.push(new Obstacle(this.ctx, 0, 200, 100, 100, 3))
      this.obstacles.push(new Obstacle(this.ctx, 0, 400, 400, 400, 7))
    },

    drawAll() {
      this.obstacles.forEach(obs => obs.draw())
    },

    moveAll() {
     this.obstacles.forEach(obs => obs.move())
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
    this.posX > 10 ? this.posX -= 20 : null
  }

  moveRight() {
    this.posX < 425 ? this.posX += 20 : null
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

    this.image = undefined
  }

  draw() {
    this.ctx.fillStyle = "#880007";
    this.ctx.fillRect(75, 0, 200, 50)
  }

  move() {
    this.posY += this.speed
  }
  
}