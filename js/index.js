window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingApp.init ('canvas')
  }



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
      //this.drawImage()  
      this.createCar()
      this.drawAll()
      this.setEventListeners()
      //this.clearScreen()
      

      console.log(this.ctx)    
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
      this.car = new Car (this.ctx, 200, 200, 100, 100, "car.png")
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
          this.frames % 50 === 0 ? this.generateObstacle() : null
          this.clearScreen()
          this.drawRectangle()
          this.drawDashedLines()
          this.drawContinuousLines()
          this.car.draw()
      }, 70)
  },

  clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },
    
  drawImage(imgName) {
  let imageInstance = new Image()
    imageInstance.src = 'images/car.png'
    imageInstance.onload = () => this.ctx.drawImage(imageInstance, 100, 100, 100, 100)
  },

  generateObstacle() {
  console.log('')
  }
}
} ;


   class Car {
    constructor (ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
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
        this.carInstance.src = 'images/car.png'
    }

    draw() {
      this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(dir) {
        dir === 'left' ? this.carPos.x -= 20 : null
        dir === 'right' ? this.carPos.x += 20 : null
    }

 }


