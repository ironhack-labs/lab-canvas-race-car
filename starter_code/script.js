window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
}
 
  function startGame() {
    RaceCar.init('mycanvas')

  }

const RaceCar = {
  version: '1.0',
  name: 'Race-car',
  description: 'Un coche que evita obstaculos',
  author: 'María',
  canvasDom: undefined,
  ctx: undefined,
  winW: undefined,
  winH: undefined,
  init: function (id) {
      this.canvasDom = document.getElementById(id)
      this.ctx = this.canvasDom.getContext('2d')
      this.setDimensions()
      this.drawRoad()   
  },
  setDimensions: function () {
    this.canvasDom.setAttribute('width', 500)
    this.canvasDom.setAttribute('height', window.innerHeight)
    this.winW = 500
    this.winH = window.innerHeight
  },
  setHandlers: function () {
    window.onresize = () => this.setDimensions()
  },
  drawRoad: function () {
    this.ctx.fillStyle = "grey"                                            // cambia los colores de relleno
    this.ctx.fillRect(0,0, this.winW, this.winH)

    this.ctx.strokeStyle ="green"
    this.ctx.lineWidth = 100
    this.ctx.beginPath()
    this.ctx.moveTo(0,0)
    this.ctx.lineTo(0, this.winH)
    this.ctx.stroke()

    this.ctx.lineWidth = 100
    this.ctx.beginPath()
    this.ctx.moveTo(this.winW,this.winH)
    this.ctx.lineTo(this.winW, 0)
    this.ctx.stroke()

    this.ctx.strokeStyle ="white"
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.moveTo(70,0)
    this.ctx.lineTo(70, this.winH)
    this.ctx.stroke()

    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.moveTo(this.winW-70,this.winH)
    this.ctx.lineTo(this.winW-70, 0)
    this.ctx.stroke()

    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.setLineDash([30, 30])
    this.ctx.moveTo(this.winW/2,this.winH)
    this.ctx.lineTo(this.winW/2, 0)
    this.ctx.stroke()

  },
//   drawLine: function () {
//     this.ctx.strokeStyle = 'green'
//     this.ctx.lineWidth = 20
//     this.ctx.setLineDash([60, 30])
//     this.ctx.beginPath()
//     this.ctx.moveTo(100, this.winH / 2)
//     this.ctx.lineTo(this.winW - 100, this.winH / 2)
//     this.ctx.stroke()
// },

}








