window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
 
  }
};

 
 const drawingApp = {
   name: 'Drawing app',
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
      
      console.log(this.ctx)    
     },

  setDimensions() {
    this.canvasSize.w = 500
    this.canvasSize.h = 700
    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },


  drawRectangle() {
       this.ctx.fillStyle = 'green'
       this.ctx.fillRect(0,0, this.canvasSize.w, this.canvasSize.h)
       this.ctx.fillStyle = 'grey'
       this.ctx.fillRect(50,0, this.canvasSize.w -100, this.canvasSize.h)
  },
      
  drawContinuousLine() {
    this.ctx.lineWidth = 7
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(65, 0)
    this.ctx.lineTo (65, this.canvasSize.h)
    this.ctx.stroke()

    this.ctx.lineWidth = 7
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.canvasSize.w -65, 0)
    this.ctx.lineTo (this.canvasSize.w -65, this.canvasSize.h)
    this.ctx.stroke()
  },
       
    
    drawDashedLines() {
      this.ctx.lineWidth = 20
      this.ctx.beginPath()
      this.ctx.setLineDash([40, 10])      
      this.ctx.moveTo(100, this.canvasSize.h / 2 - 10)
      this.ctx.lineTo(this.canvasSize.w - 200, this.canvasSize.h / 2 - 10)
      this.ctx.stroke()
    
    
    },




  drawingApp.init('canvas')
  drawingApp.setDimensions ('canvas')
  drawingApp.drawRectangle('canvas')



