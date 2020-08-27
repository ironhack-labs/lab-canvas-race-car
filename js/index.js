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
  obsArray:undefined,
  pointsInterval:0,
  canvasSize:{
    w:undefined,
    h:undefined
  },
  totalPoints:0,
  init(id){
    
    this.canvasSize.w="500"
    this.canvasSize.h="700"
    this.canvasId=id,
    this.ctx=document.getElementById(this.canvasId).getContext('2d')
    this.setEventListeners()
    this.drawGame()
    this.collision()
    this.points()
    

   

    
  },

  drawGame(){
        
    this.drawCar('car.png')
    this.drawObstacle()   
    this.interval = setInterval(() => {
      this.collision() 
      this.clearScreen()
      this.drawRoadCar()
      this.car.draw()
      this.ob.draw()
      setTimeout(() => {
        this.ob2.draw()
      }, 2000);
           
    
  }, 50);
  
  },

  
  
  clearScreen(){
    this.ctx.clearRect(0,0,500,700)

  },

  drawRoadCar(){
    
    this.drawRoad()
    this.drawBoundaries(150)
    this.drawBoundaries(435)
    this.drawGrass(100)
    this.drawGrass(465)
    this.drawDashedLines(100,700)
    this.drawScore()


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

  },
  drawObstacle(){
  this.ob=new Obstacles(this.ctx,100,35,this.canvasSize)
  this.ob2=new Obstacles(this.ctx,100,35,this.canvasSize)
  },
  drawScore(){
    this.ctx.fillStyle = "white"     
    this.ctx.font = "bold 20px sans-serif"
    this.ctx.textAlign= "center"
    this.ctx.fillText(`Score: ${this.totalPoints}` , 220, 150);
  },

  
  setEventListeners(){
    document.onkeydown = e =>{ 
      
      e.keyCode=== 37 ? this.car.move('left'): null
      e.keyCode=== 39 ? this.car.move('right'): null
    }

  },
  collision(){
    
    if (this.car.carPos.x < this.ob.obsPos.x + this.ob.obsSize.w &&
      this.car.carPos.x + this.car.carSize.w > this.ob.obsPos.x &&
      this.car.carPos.y < this.ob.obsPos.y + this.ob.obsSize.h &&
      this.car.carSize.h + this.car.carPos.y > this.ob.obsPos.y) {
        
       this.gameOver(this.totalPoints)
   }
   if (this.car.carPos.x < this.ob2.obsPos.x + this.ob2.obsSize.w &&
    this.car.carPos.x + this.car.carSize.w > this.ob2.obsPos.x &&
    this.car.carPos.y < this.ob2.obsPos.y + this.ob2.obsSize.h &&
    this.car.carSize.h + this.car.carPos.y > this.ob2.obsPos.y) {
      
     this.gameOver(this.totalPoints)

 }
   
  },
  points(){
    this.pointsInterval= setInterval(() => {
      this.totalPoints+=10
    }, 1000);

  },
  gameOver(points) {
    clearInterval(this.interval)
    clearInterval(this.pointsInterval)
    this.clearScreen() 
    
  setTimeout(() => {
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, 500, 700)
  }, 3000); 
  setTimeout(() => {
    this.ctx.fillStyle = "white"     
    this.ctx.font = "bold 60px sans-serif"
    this.ctx.textAlign= "center"
    this.ctx.fillText('Game Over', 240, 300);
  }, 3500);  
  setTimeout(() => {
    this.ctx.fillStyle = "yellow"  
    this.ctx.font = 'bold 40px sans-serif';
    this.ctx.textAlign= "center"
    this.ctx.fillText( `Your Score: ${this.totalPoints}`, 245,400 );
  }, 4500);
  setTimeout(() => {
    this.ctx.fillStyle = "red"  
    this.ctx.font = 'bold 40px sans-serif';
    this.ctx.textAlign= "center"
    this.ctx.fillText( `Drive Safely`, 245,550 );
  }, 5500);
    
    

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
  }

  
  
  
  setObsDimensions(){
  this.obsSize.w=  Math.floor(Math.random()*(200-100))+100
  }

  setObsPositionX(){

  this.obsPos.x=Math.floor(Math.random()*(400-100))+100
  }

  draw(){
    this.moveObs()
    this.ctx.fillStyle='blue'
    this.ctx.fillRect(this.obsPos.x,this.obsPos.y,this.obsSize.w,this.obsSize.h)
    

  }

  

  moveObs(){
   if(this.obsPos.y<700){
    this.obsPos.y +=10
   
    
    
}
    else {
      this.setObsDimensions()
      this.setObsPositionX()
      this.obsPos.y=0
  }

}}