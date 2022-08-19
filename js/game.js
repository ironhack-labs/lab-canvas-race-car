const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
  
    background: undefined,
    // player: undefined,
    // obstacles: [],
  
    keys: {
      TOP: 38,
      BOTTOM: 40,
      LEFT: 37,
      RIGHT: 39
    },


    init(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d')
        this.canvasDimensions()
        this.start()
    },

    canvasDimensions(){
        this.canvas.width = this.width
        this.canvas.height = this.height
        console.log('canvas dims')
    },

    start(){
        this.reset();

        this.interval = setInterval(() => {


            this.clear()
            this.drawAll();



            
        }, 1000)



    },

    reset(){
        this.background = new Background(this.ctx, this.width, this.height)
        console.log('bg executing')
    },

    drawAll(){

        this.background.draw();
        
    },

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height)
        console.log('clearing canv')
    }
}
