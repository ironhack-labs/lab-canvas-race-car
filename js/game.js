const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    obstacles: [],
  
    keys: {
      TOP: 38,
      SPACE: 32
    },

    init() {
        this.setContext();
        this.setDimensions();
        this.start();
    },

    setContext(){
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext ('2d');
    },

    setDimensions(){
        this.width = 500;
        this.height = 700;
    },

    start(){
        this.reset()
        this.drawAll()

    },


    reset(){
        this.background = new Background (this.ctx, this.width, this.height)
        this.player = new Player (this.ctx, this.width, this.height, this.keys)
    },

    drawAll(){
        this.background.draw();
        this.player.draw();
    }
}