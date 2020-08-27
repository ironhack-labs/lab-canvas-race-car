

const raceCarApp = {
    name: 'Race Car app',
    author: 'Juan Pestana',
    version: '1.0.0',
    license: undefined,
    description: 'Racing car game with Obstacles',
    canvasId: undefined,
    ctx: undefined,
    car: undefined,
    obstacle:undefined,
    frames: 0,
    end : undefined,
    // obstaclesDensity: 20,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init(id) {
        this.canvasId = 'canvas' // canvas... llamar al inicializar
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        this.setDimensions()
        this.setEventHandlers()
        this.setEventListeners()
        //this.drawBall('football-ball.png') en su lugar hay que draw la carretera, el coche y los obstáculos
        console.log('Así es el objeto de renderizado 2D', this.ctx)        // <= El objeto de renderizado bidimensional
        this.drawRoad()
        this.drawCar()
        
        
        this.interval(this.end)
        
    

    },

    interval (name) {

      const gameOver =  setInterval(() =>{
        this.frames++

        this.refreshScrn()
        this.drawRoad()
        this.car.draw()
        if (this.frames % 60 == 0){
            console.log( 'soy un obstáculo')
            this.drawObstacle() 
        }
        this.obstacle.draw()
        this.obstacle.move()
        this.collision(this.obstacle.obstPos.x,this.obstacle.obstPos.y,this.obstacle.obstSize.w,this.obstacle.obstSize.h,this.car.carPos.x,this.car.carPos.y,this.car.carSize.w,this.car.carSize.w) ? clearInterval(gameOver) : null
        
        
        },40)
        
    },
  
    setDimensions() {
        document.getElementById(this.canvasId).setAttribute('width', 500)
        document.getElementById(this.canvasId).setAttribute('height',700)
        this.canvasSize = {
            w: 500,
            h: 700
        }
    },
  
    setEventHandlers() {
        window.onresize = () => this.setDimensions()
    },
  
    setEventListeners() {
      document.onkeydown = e => {
          e.keyCode === 37 ? this.car.move('left') : null
          e.keyCode === 39 ? this.car.move('right') : null
      }
  },
  
    drawRoad() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, 20, 700)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(20, 0, 10, 700)
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(30, 0, 10, 700)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(40, 0, 420, 700)
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(460, 0, 10, 700)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(470, 0, 10, 700)
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(480, 0, 20, 700)


      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 40])
        this.ctx.moveTo(this.canvasSize.w/2 , 0)
        this.ctx.lineTo(this.canvasSize.w/2 , this.canvasSize.h)

        this.ctx.stroke()

      
    },

    collision(obstX, obstY, obstWidth, obstHeight, carX, carY, carWidth, carHeight){
        // var rect1 = {x: 5, y: 5, width: 50, height: 50}
        // var rect2 = {x: 20, y: 10, width: 10, height: 10}

    if (obstX < carX + carWidth &&
    obstX + obstWidth > carX &&
     obstY < carY + carHeight &&
    obstY + obstHeight > carY) {

    return true

        }

    },

    drawCar() {
    this.car = new Car (this.ctx, this.canvasSize)


    },

    refreshScrn(){
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawObstacle() {
            console.log('ahora estoy aquí')
            this.obstacle = new Obstacle(this.ctx, this.canvasSize)
            
        
        
    }
  
 }

  class Car {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.carPos = {
            x: 200,
            y: 520
        }
        this.carSize = {
            w: 100,
            h: 180
        }
        this.canvasSize = canvasSize
    

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
        dir === 'left' ? this.carPos.x -= 7 : null
        dir === 'right' ? this.carPos.x += 7 : null
        this.carPos.x > this.canvasSize.w - this.carSize.w -10 ? this.carPos.x -=10 : null
        this.carPos.x < 10 ? this.carPos.x += 10 : null
    }
 

  }





    class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.obstPos = {
            x: undefined,                   // ojo cambiar
            y: 0
        }
        this.obstSize = {
            w: undefined,             // ojo cambiar
            h: 50
        }
        this.canvasSize = canvasSize
    

        this.init()
    
        
    }

    init() {
        this.obstSize.w = Math.random() * (400 -100 - 80) +80
        this.obstPos.x = Math.random() * (400 - 1) + 1
        
        
    }

    draw() {
        // console.log('draw')
        this.ctx.fillStyle = 'brown'
        // this.ctx.fillRect(20, 0, 100, 30)
        this.ctx.fillRect(this.obstPos.x, this.obstPos.y, this.obstSize.w, this.obstSize.h)
    }

    move() {
        // console.log('move')
        this.obstPos.y += 10
    }

}

