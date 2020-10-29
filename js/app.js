//Creación de la aplicación y sus métodos

const racingApp = {
      name: 'Racing app',
      description: 'Canvas app for basic shapes drawing',
      version: '1.0.0',
      license: undefined,
      author: 'Adrián Monzón',
      canvasTag: undefined,
      ctx: undefined,
      cars: [],
      canvasSize: {
          w: undefined,
          h: undefined
      },
      keys: {
        left: 37,
        right: 39
      },
  
      init(id) {
          this.canvasTag = document.getElementById(id)
          this.ctx = this.canvasTag.getContext('2d')
          this.setDimensions()
          this.drawAll()
          this.createCars()
          this.setEventListeners()
          this.writeText('Score: 0')

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
          this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
          this.ctx.fillStyle = 'grey'
          this.ctx.fillRect(25, 0, 450, this.canvasSize.h)
          this.ctx.fillStyle = 'white'
          this.ctx.fillRect(55, 0, 400, this.canvasSize.h)
          this.ctx.fillStyle = 'grey'
          this.ctx.fillRect(80, 0, 350, this.canvasSize.h)
      },

      drawDashedLines() {
          this.ctx.lineWidth = 20
          this.ctx.beginPath()
          this.ctx.setLineDash([40, 10])      // Dash generator
          this.ctx.moveTo(250, 0)
          this.ctx.lineTo(250, this.canvasSize.h)
          this.ctx.stroke()
          this.ctx.strokeStyle = 'white'
      },

      createCars() {
        this.car = new Car(this.ctx, 200, 400, 60, 90, `images/car.png`)
      },

      drawAll() {
        setInterval(() => {
            this.frames++
            this.frames % 50 === 0 ? console.log('NUEVO CAMELLO/OBSTÁCULO/WHATEVER') : null //REPASAR ESTO
            this.clearScreen()
            this.drawRectangle()
            this.drawDashedLines()
            this.car.draw()
            this.writeText('Score: 0')
          
        }, 70)
    },

      setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.car.move('left') : null
            e.keyCode === this.keys.right ? this.car.move('right') : null
        }
  
    },

      clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
      },

      writeText(text) {
        this.ctx.font = '30px sans-serif'
        this.ctx.fillText(text, 100, 50)
        this.ctx.fillStyle = 'white'
    },
}
  //Creación de la clase Car y sus respectivos métodos
  class Car {
        constructor(ctx, carPosX, carPosY, carWidth, carHeight, image) {
            
            this.carPos = {
                x: carPosX,
                y: carPosY
            }
            this.carSize = {
                w: carWidth,
                h: carHeight
            }
            
            this.imageName = image
            this.ctx = ctx
            this.imageInstance = undefined
    
            this.init()
         }
        

          init() {
              this.imageInstance = new Image()
              this.imageInstance.src = `images/car.png`
          }
      
          draw() {
              
              this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
          }
      
          move(dir) {
              
            dir === 'left' ? this.carPos.x -= 20 : null
            dir === 'right' ? this.carPos.x += 20 : null
    
          }
      
          
  }

  //Creación de la clase obstáculos (no terminada)
  class Obstacle {
    constructor(ctx, obsPosX, obsPosY, obsWidth, obsHeight) {
      this.obsPos = {
        x: obsPosX,
        y: obsPosY
    }
    this.obsSize = {
        w: obsWidth,
        h: obsHeight
    }
    
    this.imageName = image
    this.ctx = ctx
    this.imageInstance = undefined

    this.init()
  }

    init() {
      this.imageInstance = new Image()
      this.imageInstance.src = `img/${this.imageName}`
  }

  draw() {
      
      this.ctx.drawImage(this.imageInstance, this.obsPos.x, this.obsPos.y, this.obsSize.w, this.obsSize.h)
  }

  move(dir) {
      
    dir === 'left' ? this.obsPos.x -= 20 : null
    dir === 'right' ? this.obsPos.x += 20 : null

  }

  }
  
