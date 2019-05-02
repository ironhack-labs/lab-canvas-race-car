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
    this.ctx.setLineDash([60, 30])
    this.ctx.beginPath()
    this.ctx.moveTo(this.winW/4, 0)
    this.ctx.lineTo(this.winW/4, this.winH)
    this.ctx.stroke()
    this.ctx.setLineDash([0, 0])                //para evitar que al hacer el setInterval todas las 
                                                //líneas se conviertan en dashed!!!!!

  },
  drawAll: function (){
    setInterval(() => {
      this.clear()
      this.drawAsfalt()
      this.drawGreenLines()
      this.drawWhiteLines()
      this.drawDashedLines()
      this.car.draw()
    }, 50)
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.winW, this.winH)
  },
  setEventListeners: function () {
    document.onkeyup = e => {
        if (e.keyCode === 37) this.car.moveLeft()
        if (e.keyCode === 39) this.car.moveRight()
    }
  }
  


}


class CarPlayer {
  constructor(ctx, winW, winH, url){
    this.ctx= ctx
    this.winW=winW
    this.winH=winH
    this.img= new Image()
    this.img.src=url
    this.posX= this.winW/4
    
    this.vel = 10

  }
  draw() {
    this.ctx.drawImage(this.img,this.posX-50, this.winH-160, 100, 160)
  }
  moveLeft() {
    if (this.posX > 0) this.posX -= this.vel
  }

  moveRight() {
      if (this.posX < this.winW/2 - 100) this.posX += this.vel
  }
}