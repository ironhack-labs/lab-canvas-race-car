window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();  }

  function startGame() {
    drawingApp.init('myCanvas')
  
   


  };

    const drawingApp = {
      name: 'Drawing app',
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
    
        drawingApp.drawRectangle()
        drawingApp.drawWhite()
        drawingApp.drawWhite2()
        drawingApp.drawGrey()
        drawingApp.drawGrey2()
        drawingApp.drawGreen()
        drawingApp.drawGreen2()
        drawingApp.drawDashedLines()
        drawingApp.drawRandomObstacle()
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
       createCar(){
        this.car = new Car(this.ctx, 160, 540, 70, 100, 'car.png')
      },
      drawRandomObstacle() {
        this.ctx.fillStyle = 'red'
        function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
          }

        this.ctx.fillRect(getRandomArbitrary(50, 400), 10, getRandomArbitrary(50, 100), 25)
      },


      drawDashedLines() {
        this.ctx.fillStyle = 'white'
        this.ctx.strokeStyle='white'
        this.ctx.lineWidth = 20
        this.ctx.setLineDash([60, 40])
        this.ctx.moveTo(260, 10)
        this.ctx.lineTo(260, 710)
        this.ctx.stroke()
    },
      drawRectangle() {
        this.ctx.fillStyle = 'grey'


        this.ctx.fillRect(10, 10, 500, 700)

      },
      drawGreen() {
        this.ctx.fillStyle = 'green'


        this.ctx.fillRect(10, 10, 35, 700)
      },
       drawGreen2() {
        this.ctx.fillStyle = 'green'


        this.ctx.fillRect(465, 10, 35, 700)
      },
      drawGrey() {
        this.ctx.fillStyle = 'grey'


        this.ctx.fillRect(10, 10, 55, 700)
      },
      drawGrey2() {
        this.ctx.fillStyle = 'grey'


        this.ctx.fillRect(445, 10, 55, 700)
      },
      drawWhite() {
        this.ctx.fillStyle = 'white'


        this.ctx.fillRect(10, 10, 80, 700)
      },
      drawWhite2() {
        this.ctx.fillStyle = 'white'


        this.ctx.fillRect(419, 10, 80, 700)
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
            drawingApp.drawRectangle()
        drawingApp.drawWhite()
        drawingApp.drawWhite2()
        drawingApp.drawGrey()
        drawingApp.drawGrey2()
        drawingApp.drawGreen()
        drawingApp.drawGreen2()
          drawingApp.drawDashedLines()
              drawingApp.drawRandomObstacle()

          this.car.draw()
         
        }, 70)
    },
         clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacle() {
        console.log('NUEVO OBSTÁCULO! CUIDAO QUE VA!')
    }




    }



};

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
        this.carInstance.src = `images/${this.imageName}`    }

    draw() {
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(dir) {
        dir === 'left' ? this.carPos.x -= 20 : null
        dir === 'right' ? this.carPos.x += 20 : null
    }
}

class obstacle{
   constructor(ctx, canvasSize, posX, posY, obsWidth, obsHeight, speed, random) {
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
         this.obsSize = {
          x: posX,
            y: posY
        }
        this.speed = speed
        this.imageName = image
        this.ctx = ctx
  

     setTimeOut(function () { this.init() },3000)
   }
  
    init() {
        drawingApp.drawRandomObstacle()
    }

    draw() {
        this.moveobs()
     setTimeOut(function () { this.init() },3000)
}

   
    

  
}
