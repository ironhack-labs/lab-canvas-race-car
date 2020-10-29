window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceCarApp.init('canvas')
  }
};
const raceCarApp = {
    name: 'Race Car Game',
    description: 'Race Car Game app ',
    version: '1.0.0',
    license: undefined,
    author: 'Isabel Pérez',
    canvasTag: undefined,
    ctx: undefined,
    cars: undefined,
    obstacles: [],
    frames: 0,
    keys: {
      left: 37,
      right: 39
  },
    canvasSize: {
        w: undefined,
        h: undefined
    },

    init(id) {
      this.canvasTag = id
      this.ctx = document.getElementById(this.canvasTag).getContext('2d')
      this.setDimensions()
      this.createCar()
      this.drawAll()
      this.setEventListeners() 

    },
    setDimensions() {
      this.canvasSize = {
        w: canvas.width,
        h: canvas.height
      }
  },
    drawRoad() {
          this.ctx.fillStyle = 'green'
          this.ctx.fillRect(0, 0, 500, 700)
          this.ctx.fillStyle = 'grey'
          this.ctx.fillRect(50,0,400,700)
          this.ctx.fillStyle = 'white'
          this.ctx.fillRect(65,0,370,700)
          this.ctx.fillStyle = 'grey'
          this.ctx.fillRect(75,0,350,700)
                },
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([70, 30])      // Dash generator
        this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
        this.ctx.stroke()
        
    },
    createCar() {
      this.car = new Car(this.ctx, 214, 542, 78, 158, 'car.png')
      console.log(this.ctx) 
    },
    generateObstacle() {
      const obstacle1 = new Obstacle(this.ctx, this.canvasSize, 40, 0, 70, 20, 10, 'obs.png')
      const obstacle2 = new Obstacle(this.ctx, this.canvasSize, 300, 0, 50, 20, 8, 'obs.png')
      const obstacle3 = new Obstacle(this.ctx, this.canvasSize, 150, 0, 60, 20, 5, 'obs.png')
      const obstacle4 = new Obstacle(this.ctx, this.canvasSize, 350, 0, 80, 20, 6, 'obs.png')

      this.obstacles.push(obstacle1, obstacle2, obstacle3, obstacle4)
    },
    setEventListeners() {
      document.onkeydown = e => {
          e.keyCode === this.keys.left ? this.car.move('left') : null
          e.keyCode === this.keys.right ? this.car.move('right') : null
      }
    },
    drawAll() {
      setInterval(() => {
          this.frames++
          this.frames % 80 === 0 ? this.generateObstacle() : null
          this.clearScreen()
          this.drawRoad()
          this.drawDashedLines()
          this.car.draw()  
          this.obstacles.forEach(elm => elm.draw())        
    }, 70)
   },
    clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

        }
class Car {
          constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
              this.ctx = ctx
              this.carPos = {
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
              this.carInstance.src = `images/${this.imageName}`
          }
      
          draw() {
              this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
          }
          move(dir) {
            dir === 'left' ? this.carPos.x -= 5 : null
            dir === 'right' ? this.carPos.x += 5 : null
        
            this.carPos.x >= 450 - this.carSize.w ? this.carPos.x -= 5 : null
            this.carPos.x <= 120 - this.carSize.w ? this.carPos.x += 5 : null

        
        }
        
      }
class Obstacle {
        constructor(ctx, canvasSize, obsPosX, obsPosY, obsWidth, obsHeight, speed, image) {
          this.canvasSize = {
              w: canvasSize.w,
              h: canvasSize.h
          }
          this.obsPos = {
              x: obsPosX,
              y: obsPosY
          }
          this.obsSize = {
              w: obsWidth,
              h: obsHeight
          }
          this.speed = speed
          this.imageName = image
          this.ctx = ctx
          this.imageInstance = undefined
  
          this.init()
      }
  
      init() {
          this.imageInstance = new Image()
          this.imageInstance.src = `images/${this.imageName}`
      }
  
      draw() {
          this.moveObs()
          this.ctx.drawImage(this.imageInstance, this.obsPos.x, this.obsPos.y, this.obsSize.w, this.obsSize.h)
      }
  
      moveObs() {
      
  
         
  
          this.obsPos.y += this.speed
      }
  
  
      }

