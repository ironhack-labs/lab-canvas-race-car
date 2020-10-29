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
       this.ctx.fillRect(0, 0, 500, 700)

       this.ctx.fillRect(25,25,100,100);
       this.ctx.clearRect(45,45,60,60);
       this.ctx.strokeRect(50,50,50,50);



       //this.ctx.fillStyle = 'grey'
       //this.ctx.fillRect(0, 0, 300, 700)
    },  
  
  }



  drawingApp.init('canvas')
  drawingApp.setDimensions ('canvas')
  drawingApp.drawRectangle('canvas')



