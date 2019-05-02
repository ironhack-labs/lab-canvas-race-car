window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
};


function startGame(id){
    RaceCar.init('myCanvas')
    RaceCar.drawAsfalt()
    RaceCar.drawGreenLines()
    RaceCar.drawWhiteLines()
    RaceCar.drawDashedLines()
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
  init: function (id){
    this.canvasDom=document.getElementById(id)
    this.ctx=this.canvasDom.getContext('2d')
    this.setDimensions()
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
  }


  


}
