class Game {
    constructor(ctx) {
      this.ctx = ctx;
      this.background = new Background(this.ctx);
      this.player = new Player(this.ctx);
  
      this.intervalId = undefined;
    }
  
    start() {
       this.intervalId = setInterval(() => {
         this.clear();
         this.draw();
         this.move();
       }, 1000 / 60);
    }
  
    draw() {
      this.background.draw();
      this.player.draw();
    }
  
    move() {
    //   this.background.move();
    }
  
    clear() {
    //   this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  }