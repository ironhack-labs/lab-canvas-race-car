
const carRacingApp = {
  name: 'Car Racing App',
  description: 'Canvas App for car racing',
  author: 'Carlos Prado',
  version: '1.0.0',
  license: undefined,
  /** @type {CanvasRenderingContext2D} */
  ctx: undefined,
  canvasDom: undefined,
  car: undefined,
  frames:0,
  obstacleArr: [],
  canvasSize: {
    w: undefined,
    h: undefined
  },
  keys: {
    left: 'ArrowLeft',
    right: 'ArrowRight'
  },

  init(id){
    this.canvasDom = document.querySelector (`#${id}`)
    this.ctx = this.canvasDom.getContext ('2d')
    this.setEventListeners()
    this.setDimensions()
    this.createCar()
    this.drawAll()
    this.createObstacles()
  },
  
  setEventListeners() {
    document.onkeydown = e => {

        if (e.key === this.keys.left) {
            this.car.move(-20)
        }
        if (e.key === this.keys.right) {
            this.car.move(20)
        }
    }
  },

  setDimensions(){ 
    this.canvasSize = {
      w: 500,
      h: 700
    }
    
    this.canvasDom.setAttribute ('width' , this.canvasSize.w)
    this.canvasDom.setAttribute ('height' , this.canvasSize.h)
  },

  createCar(){
    
    this.car = new Car(this.ctx, this.canvasSize, this.canvasSize.w/2-25, this.canvasSize.h-140, 50, 125)
    
  },

  createObstacles(){
      
      this.obstacleArr.push(new Obstacle(this.ctx,this.canvasSize, 250))

  },

  drawAll(){
    setInterval(() =>{
      this.clearScreen()
      this.drawRoad()
      this.car.draw()
      this.frames++
      if( this.frames % 50 === 0){ 
        this.createObstacles()
      }
      this.obstacleArr.forEach (elm=>{ 
        elm.draw()
        elm.move(5)
      })
      this.collisionDetection()
    },70)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  collisionDetection(){
    this.obstacleArr.forEach( elm =>{
      if (this.car.carPos.x < elm.obstaclePos.x + elm.obstacleSize.w &&
      this.car.carPos.x + this.car.carSize.w > elm.obstaclePos.x &&
      this.car.carPos.y < elm.obstaclePos.y + elm.obstacleSize.h &&
      this.car.carSize.h + this.car.carPos.y > elm.obstaclePos.y){
        alert ("GAME OVER || recarge la pagina para continuar")
      }
    })
    
  },

  drawRoad(){
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

    this.ctx.beginPath()
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash([40, 40])
    this.ctx.moveTo(this.canvasSize.w/2, 10)
    this.ctx.lineTo(this.canvasSize.w/2, this.canvasSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash([0, 0])
    this.ctx.moveTo(60, 0)
    this.ctx.lineTo(60, this.canvasSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash([0, 0])
    this.ctx.moveTo(this.canvasSize.w - 60, 0)
    this.ctx.lineTo(this.canvasSize.w - 60, this.canvasSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
  }
}

class Car{

  constructor(ctx, canvasSize, posX, posY, width, height){
    
    this.ctx = ctx
    
    this.carPos = { x: posX, y: posY }
    this.carSize = { w: width, h: height }
    this.canvasSize = canvasSize

    this.imgName = 'car.png'
    this.imageInstance = new Image()
    this.imageInstance.src = `./images/${this.imgName}`
  }

  draw(){
    
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  move(distance) {
    if (this.carPos.x > this.canvasSize.w - 120) {
      this.carPos.x-= 5
    } else if (this.carPos.x < 80){
      this.carPos.x+= 5
    } else {
      this.carPos.x += distance
    }
  }    

}

class Obstacle{

  constructor(ctx, canvasSize, posX, width, ) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.obstaclePos ={ x: Math.floor(Math.random() * (450 - 50) -50), y: 0}
    this.obstacleSize = {w: Math.floor(Math.random() * (450 - 70) -70), h: 50}
  }

  draw(){

    this.ctx.fillStyle = '#870007'
    const obs= this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
  } 

  move(distance){
    let hi = this.obstaclePos.y += distance
    console.log(hi)
  }
}