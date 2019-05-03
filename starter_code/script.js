window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
};


function startGame(id){
    RaceCar.init('myCanvas')
    RaceCar.setEventListeners()
   
}
};


const RaceCar = {
  version: '1.0',
  name: 'Racing app',
  description: 'Game with obstacles',
  author: 'Cristina',
  canvasDom: undefined,
  ctx: undefined,
  winW: undefined,
  winH: undefined,
  car: undefined,
  
  init: function (id){
    this.canvasDom=document.getElementById(id)
    this.ctx=this.canvasDom.getContext('2d')
    this.setDimensions()
    this.car = new CarPlayer(this.ctx, this.winW,this.winH,'images/car.png')
    this.drawAll()
    this.arrayObstacles=[]
  },
  setDimensions: function(){
    this.canvasDom.setAttribute('width', window.innerWidth/2)
    this.canvasDom.setAttribute('height', window.innerHeight)
    this.winH=window.innerHeight
    this.winW=window.innerWidth
  },
  drawAsfalt: function () {
    this.ctx.fillStyle = 'grey'                                             // cambia los colores de relleno
    this.ctx.fillRect(0 , 0, this.winW / 2, this.winH)
  },
  drawGreenLines: function (){
    this.ctx.strokeStyle = 'green'
    this.ctx.lineWidth = 60
    this.ctx.beginPath()
    this.ctx.moveTo(0, 0)
    this.ctx.lineTo(0, this.winH)
    this.ctx.stroke()

    this.ctx.strokeStyle = 'green'
    this.ctx.lineWidth = 60
    this.ctx.beginPath()
    this.ctx.moveTo(this.winW/2, 0)
    this.ctx.lineTo(this.winW/2, this.winH)
    this.ctx.stroke()
  },
  drawWhiteLines: function(){
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 20
    this.ctx.beginPath()
    this.ctx.moveTo(65, 0)
    this.ctx.lineTo(65, this.winH)
    this.ctx.stroke()

    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 20
    this.ctx.beginPath()
    this.ctx.moveTo(this.winW/2-65, 0)
    this.ctx.lineTo(this.winW/2-65, this.winH)
    this.ctx.stroke()
  },
  drawDashedLines: function(){
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 20
    this.ctx.setLineDash([80, 40])
    this.ctx.beginPath()
    this.ctx.lineDashOffset=this.vel
    this.ctx.moveTo(this.winW/4, 0)
    this.ctx.lineTo(this.winW/4, this.winH)
    this.ctx.stroke()
    this.ctx.setLineDash([0, 0])                //para evitar que al hacer el setInterval todas las 
                                                //líneas se conviertan en dashed!!!!!
    this.vel-=1
  },
  drawAll: function (){
    this.count = 0
    this.vel=0
    setInterval(() => {
      this.clear()
      this.drawAsfalt()
      this.drawGreenLines()
      this.drawWhiteLines()
     // this.lineDashedY+=5             

      this.drawDashedLines()
      this.car.draw()
      
      this.arrayObstacles.forEach((obstacle) => {
        obstacle.drawObstacleOrange()
        obstacle.movingObstacle()
      })

      if(this.count % 360 == 0){
        this.arrayObstacles.push(new Obstacles(this.ctx, this.winW, this.winH, )) //cada cuanto tiempo salen los obstáculos
      }      
      this.count++;
      }, 1000/60)
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.winW, this.winH)
  },
  setEventListeners: function () {
    document.onkeyup = e => {
        if (e.keyCode === 37) this.car.moveLeft()
        if (e.keyCode === 39) this.car.moveRight()
    }
  },
  

}


class CarPlayer {
  constructor(ctx, winW, winH, url){
    this.ctx= ctx
    this.winW=winW
    this.winH=winH
    this.img= new Image()
    this.img.src=url
    this.posX= this.winW/4-50
    
    this.vel = 10

  }
  draw() {
    this.ctx.drawImage(this.img,this.posX, this.winH-160, 100, 160)
  }
  moveLeft() {
    if (this.posX - 65 > 0) this.posX -= this.vel
  }

  moveRight() {
      if (this.posX + 65< this.winW/2 - 100) this.posX += this.vel
  }
}


class Obstacles {
  constructor(ctx, winW, winH,randomPosition){
    this.ctx= ctx
    this.winW=winW
    this.winH=winH
    this.positionY= -10
    this.velo=1
    this.positionX = randomPosition
  
     if( Math.floor(Math.random()*2) ===1) {
                                                  // entre cero y uno pero nunca llega a dos
        this.positionX = 0
      }else{
        this.positionX = this.winW/4
      }
      
    }
  
  drawObstacleOrange (){
    this.ctx.fillStyle = 'orange'
    this.ctx.fillRect(this.positionX ,this.positionY, this.winW / 4, 10)
  }
 // drawObstacleBlue (){
 //   this.ctx.fillStyle = 'blue'
 //   this.ctx.fillRect(this.winW / 4 ,100, this.winW/2, 10)
 // }

  movingObstacle(){                           //mueve en función al eje Y según velocidad
    this.positionY += this.velo
  }

}