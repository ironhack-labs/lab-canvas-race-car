const carRaceApp = {
  name: 'CarRace app',
  description: 'A getaway car is trying to avoid the obstacles',
  version: '1.0.0',
  author: 'Ironhack Team and Silviu Dilimot',
  license: undefined,
  repository: 'https://github.com/SilviuDN/lab-canvas-race-car.git',
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { w: undefined, h: undefined },  
  car: undefined,
  obstacles: [],
  framesCounter: 0,

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

  // myInsertImage(){
  //   const 
  // }

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
        // this.isCrash()
        if( this.isCrash()){
          clearInterval(id)
          // this.clearScreen()
          this.drawFinalScreen()
        }
        if(this.isCrash()){

          this.drawFinalScreen()
        }
        this.isCrash()
        this.drawAll()
        this.framesCounter++
        this.framesCounter % 20 == 0 ? this.createObstacles() : null
        // console.log(this.obstacles.length)
    }, 70)

  },
  
  createObstacles(){

    // const minWidth = 100
    // const maxWidth = 300
    let obstacleWidth = Math.random()*200
    if(obstacleWidth < 100){
      obstacleWidth = 100
    }
    // if(obstacleWidth > 300){
    //   obstacleWidth = 300
    // }
    const posX = Math.random()* (400 - obstacleWidth)

    const obstacle = new Obstacle(this.ctx, posX, 10, obstacleWidth, 10, this.canvasSize)

    this.obstacles.push(obstacle)
    // console.log(this.obstacles)
  },

  // drawAll() {
  //   this.obstacles.forEach(obstacle => obstacle.draw())
  // },

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
    this.setBackground()
    this.car.draw()
    this.myFillRect(200, 400 , 100, 100, 'violet' )
    
  },


  isCrash(){
    // console.log(this.obstacles[0].obstaclePos.x)
    if(this.obstacles[0].obstaclePos.y > 700){
      this.obstacles.shift();
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


















// // Iteration 2: Defining the car and the car movements
// class Car{
//   constructor(ctx, carPosX, carPosY,carWidth, carHeight, carImg){
//     this.ctx = ctx,
//     this.carPos = { x: carPosX, y: carPosY},
//     this.carSize = { w: carWidth, h: carHeight},
//     this.carImage = carImg,
//     this.imageInstance = undefined

//     this.init()   

//   }

//   init(){
//       this.imageInstance = new Image()
//       this.imageInstance.src = `img/${this.carImage}` 
//   }

//   draw(){
//     this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
//   }
// }


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};