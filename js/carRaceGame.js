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
    this.setListeners()
    setInterval(() => {
        this.clearScreen()
        this.drawAll()
    }, 70)

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