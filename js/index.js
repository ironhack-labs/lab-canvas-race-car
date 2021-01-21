window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingApp.init ('canvas')
  }
};


 const drawingApp = {
   name: 'Car race app',
   description: 'Canvas app for basic shapes drawing',
   version: '1.0.0',
   license: undefined,
   author: 'Monch',
   canvasTag: undefined,
   ctx: undefined,
   frames: 0,
   car: undefined,
   obstacle: undefined,
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
      this.createCar()
      this.drawAll()
      this.setEventListeners()  
     },

    setDimensions() {
      this.canvasSize.w = 500
      this.canvasSize.h = 700
      this.canvasTag.setAttribute('width', this.canvasSize.w)
      this.canvasTag.setAttribute('height', this.canvasSize.h)
     },


    drawRectangle() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0,0, this.canvasSize.w, this.canvasSize.h)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(50,0, this.canvasSize.w -100, this.canvasSize.h)
     },
      
    drawContinuousLines() {
      this.ctx.setLineDash([0,0])
      this.ctx.lineWidth = 7
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.moveTo(65, 0)
      this.ctx.lineTo(65, this.canvasSize.h)
      this.ctx.stroke()

      this.ctx.lineWidth = 7
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.moveTo(this.canvasSize.w -65, 0)
      this.ctx.lineTo (this.canvasSize.w -65, this.canvasSize.h)
      this.ctx.stroke()
     },
       
    
    drawDashedLines() {
      this.ctx.lineWidth = 5
      this.ctx.beginPath()
      this.ctx.setLineDash([50, 30])      
      this.ctx.moveTo(this.canvasSize.w / 2, 0)
      this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
      this.ctx.stroke()
    },

    createCar() {
      this.car = new Car (this.ctx, 150, 550, 100, 100, 'mario-kart.png')
    },

  setEventListeners() {
      document.onkeydown = e => {
          e.key === this.keys.left ? this.car.move('left') : null
          e.key === this.keys.right ? this.car.move('right') : null
      }
  },

  drawAll() {
      setInterval(() => {
          this.frames++
          this.frames % 70 === 0 ? this.createObstacle() : null
          this.clearScreen()
          this.drawRectangle()
          this.drawDashedLines()
          this.drawContinuousLines()
          this.car.draw()
          this.obstacle.drawObst()
      }, 70)
  },

  clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  createObstacle(){
    let tamX=Math.random () * (60 - 20) + 10, 
      x=Math.random () * ((this.canvasSize.w -100-tamX) - 50) + 50
    this.obstacle = new Obstacle (this.ctx, x, 0, tamX, 20)
  }
  
}

class Car{
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
        this.carInstance.src = 'images/mario-kart.png'
    }

    draw() {
      this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(dir) {
        dir === 'left' ? this.carPos.x -= 20 : null
        dir === 'right' ? this.carPos.x += 20 : null
    }

 }


 class Obstacle{
  constructor(ctx, obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight) {
       this.ctx = ctx

       this.obstaclePos = {
           x: obstaclePosX,
           y: obstaclePosY
       }
       this.obstacleSize = {
           w: obstacleWidth,
           h: obstacleHeight
       }
   }

   drawObst() {
     this.move()
     this.ctx.fillStyle = 'red'
     this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

   move() {
     this.obstaclePos.y += 20
   }

}

