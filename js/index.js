window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  canvasRaceCar.init('canvasCar')
  }
};


const canvasRaceCar={
  name:'Canvas race car',
  author:'Diego Alejandro Molina',
  version:'1.0.0',
  license:'open source',
  description:'A car game made in canvas with collision',
  canvasId:undefined,
  ctx:undefined,
  interval:undefined,
  canvasSize:{
    w:undefined,
    h:undefined
  },
  init(id){
    
    this.canvasId=id,
    this.ctx=document.getElementById(this.canvasId).getContext('2d')
    this.setEventListeners()
    this.drawGame()
    this.canvasSize.w="500"
    this.canvasSize.h="700"
    
  },

  drawGame(){
    setInterval(() => {
      this.drawObstacle()
    }, 1000);
    // this.drawObstacle()
    this.drawCar('car.png')
    this.interval = setInterval(() => {
      this.clearScreen()
      this.drawRoadCar()
    this.car.draw()
    this.ob.draw()

    
    
  }, 50);
  },

  clearScreen(){
    this.ctx.clearRect(0,0,this.canvasSize.w,this.canvasSize.h)

  },

  drawRoadCar(){
    
    this.drawRoad()
    this.drawBoundaries(150)
    this.drawBoundaries(435)
    this.drawGrass(100)
    this.drawGrass(465)
    this.drawDashedLines(100,700)


  },
  

  drawRoad(){
    this.ctx.fillStyle='gray'
    this.ctx.fillRect(100,100,500,700)
        },

  drawBoundaries(position){
    this.ctx.fillStyle="white"
    this.ctx.fillRect(position,100,15,700)
  },

  drawGrass(position){
    this.ctx.fillStyle="green"
    this.ctx.fillRect(position,100,35,700)
  },
  
  drawDashedLines(mov1,mov2){
    this.ctx.strokeStyle="white"
    this.ctx.lineWidth=10
    this.ctx.beginPath()
    this.ctx.setLineDash([40,12])
    this.ctx.moveTo(295,mov1)
    this.ctx.lineTo(295,mov2)
    this.ctx.stroke()
    
  },

  drawCar(imageName){
  this.car=new Car(this.ctx,200,600,40,75,this.canvasSize,imageName)
  // this.car.draw()
  },
  drawObstacle(){
  this.ob=new Obstacles(this.ctx,100,0,15,this.canvasSize)
  },
  
  setEventListeners(){
    document.onkeydown = e =>{ 
      
      e.keyCode=== 37 ? this.car.move('left'): null
      e.keyCode=== 39 ? this.car.move('right'): null
    }

  }
  
}


class Car{
  constructor(ctx,posX,posY,carW,carH,canvasSize,imageName){
    this.ctx = ctx
    this.carPos={
        x:posX,
        y:posY
    }
    this.carSize={
        w:carW,
        h:carH
    }
    this.imageName=imageName
    this.canvasSize=canvasSize
    
    this.imageInstance=undefined
    this.init()
  }

  init(){
    this.imageInstance= new Image()
    this.imageInstance.src= `images/${this.imageName}`
  }

  draw(){
    
    this.ctx.drawImage(this.imageInstance,this.carPos.x,this.carPos.y,this.carSize.w,this.carSize.h)
  }

  move(direction){

  
  if(direction ==='left' && this.carPos.x>180) this.carPos.x -=10 
    if(direction ==='right' && this.carPos.x<380) this.carPos.x +=10
  }

}


class Obstacles{
  constructor(ctx,posY,obsH,canvasSize){
    this.ctx=ctx
    this.obsPos={
      x:undefined,
      y:posY
    },
    this.obsSize={
      w:undefined,
      h:obsH
    }
    this.canvasSize=canvasSize;
    this.draw()
    this.init()
  }
  
  init(){
  this.setObsPositionX()
  this.setObsDimensions()
  this.obsDraw()
  }

  obsDraw(){
    this.moveObs()
  }
  
  
  setObsDimensions(){
  this.obsSize.x=  Math.floor(Math.random()*(200-100))+100
  
  }

  setObsPositionX(){

  this.obsPos.x=Math.floor(Math.random()*(400-100))+100
  console.log(this.obsPos.x)
  }

  draw(){
    this.moveObs()
    this.ctx.fillStyle='blue'
    this.ctx.fillRect(this.obsPos.x,this.obsPos.y,this.obsSize.x,50)

  }

  moveObs(){
   
    this.obsPos.y++
  }

}