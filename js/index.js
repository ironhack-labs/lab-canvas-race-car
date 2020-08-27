window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

const carRaceApp = {    
    name: 'Car racing arcade game',
    author: 'Javier de Salas',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas app to drive a car avoiding random obstacles',
    canvasId : undefined,
    ctx: undefined,
    car: undefined,
    canvasSize: {
      w: undefined,
      h: undefined,
    },
    obstacles: [],
    frames: 0,
    score: 0,

    init(id) {
      this.canvasId = id
      this.ctx = document.getElementById(this.canvasId).getContext('2d')
      this.setDimensions()
      this.setEventListeners()

      this.drawRoad()

      this.placeCar()
      this.drawCar()  

      this.moveOn()
   
    },

    setDimensions() {
      const canvas = document.getElementById(this.canvasId)
      
      this.canvasSize = {
        w: canvas.width,
        h: canvas.height
      }
    },
    
    moveOn() {
      this.car.imgInstance.onload= e => {
      setInterval(() => {
        this.frames++

        this.clearScreen()
        this.frames % 70 === 0 ? this.addObstacle() : null
        this.drawRoad()
        this.drawCar()
        this.moveObstacles()
        this.checkCollisions()
      }, 50)
    }
    },

    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawRoad() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(50, 0, this.canvasSize.w-100, this.canvasSize.h)

      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(60, 0, this.canvasSize.w-120, this.canvasSize.h)

      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(75, 0, this.canvasSize.w-150, this.canvasSize.h)

      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.setLineDash([40,40])
      this.ctx.moveTo (this.canvasSize.w / 2, 0)
      this.ctx.lineTo (this.canvasSize.w / 2, this.canvasSize.h)
      this.ctx.closePath()
      this.ctx.stroke()
    },

    placeCar() {
     this.car = new Car (this.ctx, this.canvasSize.w /2 - 25, this.canvasSize.h  - 125, 50, 100, 'car.png', this.canvasSize.w)
     
     this.carImage = new Image()
     this.carImage.src = `images/${this.car.imgName}`
    },

    drawCar() {
      this.car.renderCar()
    },

    addObstacle() {
      this.obstacles.push(this.obstacle = new Obstacle (this.ctx))
      console.log (this.obstacle)
    },

    moveObstacles() {
      this.obstacles.forEach(e => {
        e.moveO()
        })
    },

    setEventListeners() {
      document.onkeydown = e => {
        e.keyCode === 37 ? this.car.move('left') : null
        e.keyCode === 39 ? this.car.move('right') : null  
      }
    },

    checkCollisions() {
      this.obstacles.forEach(e => {
        if (this.car.carPos.x < e.obstaclePos.x + e.obstacleSize.w &&
          this.car.carPos.x + this.car.carSize.w > e.obstaclePos.x &&
          this.car.carPos.y < e.obstaclePos.y + e.obstacleSize.h &&
          this.car.carPos.y + this.car.carSize.h > e.obstaclePos.y) {
            alert('Crash & Burn')
            console.log(e)
          }
          else{
            console.log('ppp')
          }
      })
    }
  
    
}

class Car {
  constructor (ctx, posX, posY, carW, carH, imgName, canvasSizeW) {
    this.ctx = ctx
    this.carPos = {
      x: posX,
      y: posY
    }
    this.carSize = {
      w: carW,
      h: carH
    }
    this.imgName = imgName
    this.imgInstance = undefined
    this.canvasSizeW = canvasSizeW

    this.initCar()
  }

  initCar() {
    this.imgInstance = new Image()
    this.imgInstance.src = `images/${this.imgName}`
  }

  renderCar() {
    this.ctx.drawImage(this.imgInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  move(direction) {
    if (this.carPos.x > 50 && this.carPos.x < this.canvasSizeW - 70) {
      direction === 'left' ? this.carPos.x -= 10 : null
      direction === 'right' ? this.carPos.x += 10 : null
    }
    else if (this.carPos.x <= 50) {
      this.carPos.x = 57
    }
    else if ( this.carPos.x >= this.canvasSizeW - 90) {
      this.carPos.x = this.canvasSizeW - 97  
    } 
  }
}

class Obstacle {
  constructor (ctx, canvasSizeH) {
    this.ctx = ctx
    this.obstaclePos = {
      x: 300* Math.random(),
      y: 0
    }
    this.obstacleSize = {
      w: 150* Math.random() + 100,
      h: 30
    }
    this.drawObstacle()
    this.canvasSizeH = canvasSizeH
  }

  drawObstacle(){
    this.ctx.fillStyle = '#810'
      this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
  }

  moveO() {
    this.obstaclePos.y += 4
    this.drawObstacle()
    if (this.obstaclePos.y > this.canvasSizeH) {
      return 5
    } 
    else {
      return 0
    }
  }
  
}


carRaceApp.init('cars')

