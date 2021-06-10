const carRaceApp = {
  name: 'CarRace app',
  description: 'A getaway car is trying to avoid the obstacles',
  version: '1.0.0',
  author: 'Ironhack Team and Silviu Dilimot',
  license: undefined,
  repository: 'https://github.com/SilviuDN/lab-canvas-race-car.git',
  canvasDOM: undefined,
  ctx: undefined,
  canvasSize: { w: undefined, h: undefined },  
  car: undefined,
  obstacles: [],
  framesCounter: 0,
  score: 0,

  init(){
    this.setContext()
    this.setDimensions()
    this.setBackground()
    this.start()
  },
  
  // Iteration1: setting the background
  setBackground(){
    // TO DO: use dimensions relatives to canvasSiza
    this.myFillRect(0, 0, 500, 700, 'green')
    this.myFillRect(40, 0, 420, 700, 'grey')
    this.myStrokeLine(50, 0, 700, 5, 'white', false)
    this.myStrokeLine(450, 0, 700, 5, 'white', false)
    this.myStrokeLine(250, 0, 700, 5, 'white', true)
  },

  myFillRect(x, y, w, h, color){
    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, w, h)    
  },

  myStrokeLine(x, yStart, yStop, w, color, isDashed = false){
    this.ctx.beginPath()
    isDashed ? this.ctx.setLineDash([20, 15]) : null
    this.ctx.lineWidth = w
    this.ctx.strokeStyle = color
    this.ctx.moveTo(x, yStart)
    this.ctx.lineTo(x, yStop)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  setContext(){
    this.canvasDOM = document.getElementById('canvas')
    this.ctx = this.canvasDOM.getContext('2d')

  },

  setDimensions(){
    this.canvasSize.w = this.canvasDOM.getAttribute('width')
    this.canvasSize.h = this.canvasDOM.getAttribute('height')

  },
  
  setListeners() {
    document.onkeyup = e => {
        e.key === 'ArrowLeft' ? this.car.moveLeft() : null
        e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
  },


  start(){
    this.createCar()
    this.createObstacles()
    this.setListeners()
    let id = setInterval(() => {
        this.clearScreen()
        this.moveAllObstacles()
        if( this.isCrash()){          
          this.drawFinalScreen()
          console.log(this.score)
          clearInterval(id)
        }else{
          this.drawAll()
        }
        this.framesCounter++
        this.framesCounter % 20 == 0 ? this.createObstacles() : null
        // console.log(this.obstacles.length)
    }, 70)

  },
  
  createObstacles(){
    //random obstacle width between 100 and 200
    let obstacleWidth = Math.random()*150 + 100 
    const posX = Math.random()* (400 - obstacleWidth)

    const obstacle = new Obstacle(this.ctx, posX, 10, obstacleWidth, 10, this.canvasSize)
    this.obstacles.push(obstacle)
    // console.log(this.obstacles)
  },

  createCar(){
    this.car = new Car(this.ctx, 225, 650, 50, 50, 'car.png')
  },

  clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  drawAll() {
    this.setBackground()
    this.car.draw()    
    this.obstacles.forEach(obstacle => obstacle.draw())
  },

  drawFinalScreen(){
    this.clearScreen()
    this.setBackground()
    this.car.draw()
    this.myFillRect(100, 200, 300, 300,'green')
    this.ctx.fillStyle = "orange"
    this.ctx.font = "30px Arial"
    this.ctx.fillText(`Congrats! You won ${this.score} points!`, 100, 400, 300)
  },

  isCrash(){
    if(this.obstacles[0].obstaclePos.y > 700){
      this.obstacles.shift();
      this.score ++
    }
    const xo = this.obstacles[0].obstaclePos.x
    const yo = this.obstacles[0].obstaclePos.y
    const wo = this.obstacles[0].obstacleSize.w
    const xc = this.car.carPos.x
    const yc = 650
    const wc = 50
    
    if( ( yo > yc ) && 
        (( xo < xc && (xo + wo) > xc ) ||
        ( xo > xc) && (xc + wc) > xo)) {
      console.log('Baaaammm!!!!', xc)     
      return true
    }
    
  },
  
  moveAllObstacles() {
    this.obstacles.forEach(obstacle => obstacle.move())
}
  


  
}



