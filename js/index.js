/* ----- APP ----- */

/* ---DRAWING--- */

const drawingApp = {
  name: 'Drawing app',
  description: 'Canvas app for basic shapes drawing',
  version: '1.0.0',
  license: undefined,
  author: 'Manuel Barreda',
  canvasTag: undefined,
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined
  },

  init(id) {
    this.canvasTag = document.getElementById(id)
    this.ctx = this.canvasTag.getContext('2d')
    this.setDimensions()

    console.log(this.ctx)       // Puedes ver el contexto por consola
  },

  setDimensions() {
    this.canvasSize.w = window.innerWidth
    this.canvasSize.h = window.innerHeight
    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },

  drawRectangle() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(this.canvasSize.w/2 - (this.canvasSize.w * .6/2), 0, this.canvasSize.w * .6, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(this.canvasSize.w/2 - (this.canvasSize.w * .525/2), 0, this.canvasSize.w * .525, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w * .5/ 2), 0, this.canvasSize.w * .5, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(this.canvasSize.w/2 - (this.canvasSize.w * .475/2), 0, this.canvasSize.w * .475, this.canvasSize.h)
  },

  drawDashedLines() {
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 7
    this.ctx.beginPath()
    this.ctx.setLineDash([30, 20])      // Dash generator
    this.ctx.moveTo(this.canvasSize.w/2 -5, 0)
    this.ctx.lineTo(this.canvasSize.w/2 -5, this.canvasSize.h)
    this.ctx.stroke()
    },

}
/* ---DOM--- */
    
// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };

/* ----- SCRIPT ----- */

drawingApp.init("canvas")
drawingApp.drawRectangle()
drawingApp.drawDashedLines()
// drawingApp.drawArc()
// drawingApp.writeText('Ese Popino ahi')
// drawingApp.drawImage('football-ball.png')
// animateApp.init('myCanvas')
//controlledApp.init('myCanvas')