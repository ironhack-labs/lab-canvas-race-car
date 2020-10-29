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
    this.canvasSize.w = window.innerWidth *.4
    this.canvasSize.h = window.innerHeight
    this.canvasTag.setAttribute('width', this.canvasSize.w)
    this.canvasTag.setAttribute('height', this.canvasSize.h)
  },


    drawRectangle() {
       this.ctx.fillStyle = 'green'
       this.ctx.fillRect(this.canvasSize.w / 2 - 100, this.canvasSize.h / 2 - 100, 200, 200)
       this.ctx.fillStyle = 'green'
       this.ctx.fillRect(this.canvasSize.w / 2 - 50, this.canvasSize.h / 2 - 50, 100, 100)
    },  
  
  }



  drawingApp.init('canvas')
  drawingApp.setDimensions ('canvas')
  drawingApp.drawRectangle('canvas')



