window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };



  function startGame() {
    drawingApp.init('canvas');
    drawingApp.drawAll();
  }
};

const drawingApp = {
  name: 'Drawing app',
  description: 'Canvas app for basic drawing',
  version: '1.0.0',
  license: undefined,
  author: 'Héctor Carramiñana',
  canvasTag: undefined,
  ctx: undefined,
  frames: 0,
  cars: undefined,
  obstacles: [],
  keys: {
      left: 37,
      right: 39
  },
  canvasSize: {
      w: undefined,
      h: undefined
  },

  init(id) {

      this.canvasTag = document.getElementById(id)
      this.ctx = this.canvasTag.getContext('2d')
      this.setDimensions()
      this.createCars()
      this.drawRoad()
      this.setEventListeners()
  },

  setDimensions() {
      this.canvasSize.w = this.canvasTag.width
      this.canvasSize.h = this.canvasTag.height
  },

  createCars() {

      this.cars = new Car(this.ctx, this.canvasSize.w / 2 - 30, this.canvasSize.h - 150, 50, 100, 'car.png', this.canvasSize)
  },
 
  drawRoad() {

      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

      this.ctx.fillStyle = 'gray'
      this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)

      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(40, 0, 20, this.canvasSize.h)
      this.ctx.fillRect(this.canvasSize.w - 60, 0, 20, this.canvasSize.h)

      // LÍNEAS DISCONTINUAS DE LA CARRETERA: 

      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 10
      this.ctx.beginPath()
      this.ctx.setLineDash([40, 10])
      this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
      this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
      this.ctx.stroke()
  },


  createObstales() {
      // constructor(ctx, posX, posY, obstacleWidth, obstacleHeight, canvasSize, speed)

      const obstacle1 = new Obstacle(this.ctx, 60, 0, 150, 20, this.canvasSize, 3)
      const obstacle2 = new Obstacle(this.ctx, this.canvasSize.w / 2 - 80, 0, 180, 20, this.canvasSize, 7)
      const obstacle3 = new Obstacle(this.ctx, 320, 0, 150, 20, this.canvasSize, 4)
      this.obstacles.push(obstacle1, obstacle2, obstacle3)
  },

  drawAll() {

      setInterval(() => {
          this.frames += 1.5
          this.frames % 40 === 0 ? this.createObstales() : null
          this.clearScreen()
          this.drawRoad() 
          this.inYourFace()
          this.scoreUser()
          this.cars.draw()
          this.obstacles.forEach(elm => elm.drawObstacles())
      }, 70)
      
  },

  setEventListeners() {

      document.onkeydown = e => {
          e.keyCode === this.keys.left ? this.cars.moveCar('left') : null
          e.keyCode === this.keys.right ? this.cars.moveCar('right') : null
      }
  },

  clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  inYourFace() {
      this.obstacles.forEach(elm => {
          if (this.cars.carPos.x < elm.obstaclePos.x + elm.obstacleSize.w &&
              this.cars.carPos.x + this.cars.carSize.w > elm.obstaclePos.x &&
              this.cars.carPos.y < elm.obstaclePos.y + elm.obstacleSize.h &&
              this.cars.carSize.h + this.cars.carPos.y > elm.obstaclePos.y) {
              alert('TE CHOCASTE! - ACTUALIZA LA PÁGINA Y COMIENZA DE NUEVO')
          }
      })
  },

  scoreUser() {
      let score = 0
      console.log('LOS PUNTOS OBTENIDOS HASTA EL MOMENTO SON:', score++)
      
  }
}


class Car {
  constructor(ctx, posX, posY, carWidth, carHeight, image, canvasSize) {
      this.ctx = ctx
      this.imageInstance = undefined
      this.imgName = image
      this.carSize = {
          w: carWidth,
          h: carHeight
      }
      this.carPos = {
          x: posX,
          y: posY
      }   
      this.canvasSize = {
          w: canvasSize.w,
          h: canvasSize.h
      }

      this.init()
  }

  init() {

      this.imageInstance = new Image()
      this.imageInstance.src = `images/${this.imgName}`
  }

  draw() {
      this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  moveCar(direction) {
      
      if (this.carPos.x > 60 && (this.carPos.x + this.carSize.w) < (this.canvasSize.w - 60)) {
          direction === 'left' ? this.carPos.x -= 10 : null
          direction === 'right' ? this.carPos.x += 10 : null
      } else if (this.carPos.x <= 60) {
          direction === 'left' ? alert('HÉCTOR DEBE APRENDER JS Y LUEGO A CONDUCIR') : null
          direction === 'right' ? this.carPos.x += 10 : null
      } else if ((this.carPos.x + this.carSize.w) >= (this.canvasSize.w - 60)) {
          direction === 'left' ? this.carPos.x -= 10 : null
          direction === 'right' ? alert('HÉCTOR DEBE APRENDER JS Y LUEGO A CONDUCIR') : null
      }
  }
}


class Obstacle {
  constructor(ctx, obstacleposX, obstacleposY, obstacleWidth, obstacleHeight, canvasSize, speed) {
      this.ctx = ctx
      this.obstaclePos = {
          x: obstacleposX,
          y: obstacleposY
      }
      this.obstacleSize = {
          w: obstacleWidth,
          h: obstacleHeight
      }
      this.canvasSize = {
          w: canvasSize.w,
          h: canvasSize.h
      }
      this.speed = speed
      this.drawObstacles()
  }

  drawObstacles() {

      this.moveObstacles()
      this.ctx.fillStyle = 'brown'
      this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
  }

  moveObstacles() {

      this.obstaclePos.y += this.speed
  }
}