window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

//objeto raceCarApp -----
  const raceCarApp = {
    name: `Race Car App`,
    description: `Canvas Game`,
    author: `Abel Andrés`,
    vesrion: `1.0.0`,
    license: undefined,
    /** @type {CanvasRenderingContext2D} */
    ctx: undefined,
    canvasDOM: undefined,
    car: undefined,
    obstacles: [],
    frames: 0,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keys: {
      left: `ArrowLeft`,
      right: `ArrowRight`
    },
    


    init(id) {
      this.canvasDOM = document.querySelector(`#${id}`)
      console.log(this.canvasDOM)
      this.ctx = this.canvasDOM.getContext('2d')
    },

    setEventListeners() {
      document.onkeyup = e => {
        if (e.key === this.keys.left) {
          this.car.move(-10)
        }
        if (e.key === this.keys.right) {
          this.car.move(10)
        }
      }
    },

    setDimensions() {
      this.canvasSize = {
        w: 500,
        h: 700        
      }
      // this.canvasDOM.setAttribute('width', this.canvasSize.w)
      // this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },

    drawFilledRectangle() {
      
      this.ctx.fillStyle = '#808080'
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
      
      this.ctx.fillStyle = '#3e8317'
      this.ctx.fillRect(0, 0, 40, this.canvasSize.h)
      this.ctx.fillStyle = '#3e8317'
      this.ctx.fillRect(this.canvasSize.w - 40, 0, 40, this.canvasSize.h)
      
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fillRect(this.canvasSize.w - 450, 0, 20, this.canvasSize.h)
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fillRect(this.canvasSize.w - 70, 0, 20, this.canvasSize.h)
    },

    drawLine() {
      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = `#ffffff`
      this.ctx.setLineDash([40, 40])
      this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
      this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
      this.ctx.stroke()      
    },

    createCar() {
      this.car = new Car(this.ctx, this.canvasSize, this.canvasSize.w / 2 - 25, this.canvasSize.h - 150, 50, 100)
    },

    drawAll() {
      console.log(this.car)
      setInterval(() => {
        this.clearScreen()
        this.drawFilledRectangle()
        this.drawLine()
        this.car.draw()
        this.obstacles.forEach(elem => elem.draw())
        this.frames++
        this.frames % 60 === 0 ? this.createObstacle() : null
        
      }, 70)
    },

    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.w)
    },

    createObstacle() {
      const obstacle1 = new Obstacle(this.ctx, this.canvasSize, Math.floor(Math.random() * (120 - 80)) + 80, 0, Math.floor(Math.random() * (250 - 80)) + 80, 20, 4)
      const obstacle2= new Obstacle(this.ctx, this.canvasSize, this.canvasSize.w - (Math.floor(Math.random() * (220 - 180)) + 180), 0, 100, 20, 6)
      this.obstacles.push(obstacle1, obstacle2)
    }
}




//------CLASSES--------//

class Car {

  constructor(ctx, canvasSize, posX, posY, width, height,) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.carPos = {
      x: posX,
      y: posY
    }
    this.carSize = {
      w: width,
      h: height
    }

    this.imageName = 'car.png'
    this.imageInstance = new Image()
    this.imageInstance.src = `images/${this.imageName}`
  }
  draw() {
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  move(distance) {
    this.carPos.x += distance
  }  
}


class Obstacle {
  constructor(ctx, canvasSize, posX, posY, width, height, speed) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.obstaclePos = {
      x: posX,
      y: posY          
    }
    this.obstacleSize = {
      w: width,
      h: height
    }
    this.speed = speed
    }
    
    move() {
      this.obstaclePos.y += this.speed
    }
    draw() {
      this.move()
      this.ctx.fillStyle = `#89220f`
      this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }
}





//--motor del juego-----//
  function startGame() {
    
  raceCarApp.init('canvas')
  raceCarApp.setEventListeners()
  raceCarApp.setDimensions()
  raceCarApp.drawFilledRectangle()
  raceCarApp.drawLine()
  raceCarApp.createCar()
  raceCarApp.drawAll()
  raceCarApp.createObstacle()
  }
};

