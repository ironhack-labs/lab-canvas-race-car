
//      ****  WORK ENVIRONMENT ****

const raceCarApp = {
  name: 'Race App',
  description: 'Ironhack\'s Race Car Lab',
  version: '1.0.0',
  author: 'Jose A. Casado',
  license: undefined,
  canvasTag: undefined,
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined
  },
  frames: 0,
  car: undefined,
  obstacles: [],      
  roadInstance: undefined,
  keys: {
    left: 37,
    right: 39
  },
  gameOver: false,
  score: 0,

  init(id) {
    this.canvasTag = document.getElementById(id)
    this.ctx = this.canvasTag.getContext('2d')
    this.setDimensions()
    this.createCar()
    this.drawAll()
    this.setEventListeners()
  },

  setDimensions() {
    this.canvasSize = {
      w: window.innerWidth * .4,
      h: window.innerHeight
    }
    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },
  
  setEventListeners() {
    document.onkeydown = e => {
      if (e.keyCode === this.keys.left) {
        this.car.move('left')
      }
      if (e.keyCode === this.keys.right) {
        this.car.move('right')
      }
    }
  },
 
//      ****  GAME METHODS ****
 
  
  createCar() {
    this.car = new Car(this.ctx, this.canvasSize.w / 2 - 40, this.canvasSize.h - 200, 80, 100, 'car.png')
  },

  drawAll() {
    const intervalID = setInterval(() => {
      this.frames++
      this.clearScreen()
      this.drawRoad()
      this.car.draw()
      this.checkCollision()
      this.updateScore()
      
      if (this.frames % 50 === 0) {
        this.createObstacles()
      }
      this.obstacles.forEach(elm => {
        elm.drawObstacle()
      })

      if (this.gameOver === true) {
        clearInterval(intervalID)
        this.endGame()
      }
      
    }, 70)
  },

  drawRoad() {
    this.roadInstance = new Road(this.ctx, this.canvasSize)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  createObstacles() {
    // const obstacle = new Obstacle(this.ctx, this.canvasSize, this.canvasSize.w / 2 - 200, 0, 2)      // Este era el rectángulo

    const randomX1 = Math.floor(Math.random() * (this.canvasSize.w - 0)) + 0
    const randomX2 = Math.floor(Math.random() * (this.canvasSize.w - 0)) + 0
    
    const randomSpeed1 = Math.floor(Math.random() * (5 - 1)) + 1
    const randomSpeed2 = Math.floor(Math.random() * (5 - 1)) + 1

    const obstacle1 = new Obstacle(this.ctx, this.canvasSize, randomX1, 0, 100, 100, randomSpeed1, 'cow_walk1.png')
    const obstacle2 = new Obstacle(this.ctx, this.canvasSize, randomX2, 0, 100, 100, randomSpeed2, 'cow_walk2.png')

    this.obstacles.push(obstacle1, obstacle2)
  },

  checkCollision() {
    this.obstacles.forEach(elm => {
      if (elm.obstaclePosition.x < this.car.carPosition.x + this.car.carSize.w  &&
          elm.obstaclePosition.x + elm.obstacleSize.w > this.car.carPosition.x    &&
          elm.obstaclePosition.y < this.car.carPosition.y + this.car.carSize.h  &&
        elm.obstaclePosition.y + elm.obstacleSize.h > this.car.carPosition.y) {
        
        this.gameOver = true
      }
    })
  },

  updateScore() {
    this.ctx.fillStyle = 'white'
    this.ctx.font = '20px sans-serif'
    this.ctx.fillText(`Score: ${ this.score }`, 50, 40)
    
    this.obstacles.forEach(elm => {
      if (elm.obstaclePosition.y > this.car.carPosition.y + this.car.carSize.h) {
        this.score += 10
        this.obstacles.splice(elm, 1)
      }
    })
  },

  endGame() {
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.canvasSize.w, 600)

    this.ctx.fillStyle = 'red'
    this.ctx.font = '50px sans-serif'
    this.ctx.fillText('YOU LOSE, HA!!', this.canvasSize.w / 2 - 120, this.canvasSize.h / 2 - 60, 250)
    
    this.ctx.fillStyle = 'white'
    this.ctx.font = '30px sans-serif'
    this.ctx.fillText(`Your final score is: ${this.score}`, this.canvasSize.w / 2 - 120, this.canvasSize.h / 2, 250)
  }
}


//      ****  CLASSES ****

class Road {
  constructor (ctx, canvasSize) {
    this.ctx = ctx
    this.canvasSize = {
      w: canvasSize.w,
      h: canvasSize.h
    }

    this.init()
  }

  init() {
    this.drawRectangle()
    this.drawDashedLine()
  }

  drawRectangle() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 500, 600)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(20, 0, 460, 600)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(30, 0, 440, 600)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(40, 0, 420, 600)
  }

  drawDashedLine() {
    this.ctx.lineWidth = 8
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([30, 30])
    this.ctx.moveTo(this.canvasSize.w / 2, 20)
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h - 80)
    this.ctx.stroke()
  }

}


class Car {
  constructor (ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
    this.ctx = ctx
    this.carPosition = {
      x: carPosX,
      y: carPosY
    }
    this.carSize = {
      w: carWidth,
      h: carHeight
    }
    this.imageName = carImage
    this.carInstance = undefined

    this.init()
  }

  init() {
    this.carInstance = new Image()
    this.carInstance.src = `images/${ this.imageName }`
  }

  draw() {
    this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
  }

  move(dir) {
    if (dir === 'left') {
      this.carPosition.x -= 20
    }
    if (dir === 'right') {
      this.carPosition.x += 20
    }
  }
}


class Obstacle {
  constructor (ctx, canvasSize, obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight, speed, cowImage) {
    this.ctx = ctx
    this.canvasSize = {
      w: canvasSize.w,
      h: canvasSize.h
    }
    this.obstaclePosition = {
      x: obstaclePosX,
      y: obstaclePosY
    }
    this.obstacleSize = {
      w: obstacleWidth,
      h: obstacleHeight
    }
    this.speed = speed
    this.imageName = cowImage
    this.imageInstance = undefined

    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `images/${ this.imageName }`
  }

  drawObstacle() {
    this.moveObstacle()
    this.ctx.drawImage(this.imageInstance, this.obstaclePosition.x, this.obstaclePosition.y, this.obstacleSize.w, this.obstacleSize.h)
    
    // this.ctx.fillStyle = 'red'
    // this.ctx.fillRect(this.canvasSize.w, this.canvasSize.w, 400, 40)
  }

  moveObstacle() {
    this.obstaclePosition.y += this.speed
  }
}