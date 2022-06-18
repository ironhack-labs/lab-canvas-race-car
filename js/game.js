class Game {
    constructor(ctx){
      this.ctx = ctx;
      this.intervalId = null;
      this.car = new Car(this.ctx);
      this.background = new Background(this.ctx);
    }

    start() {
        this.intervalId = setInterval(() => {
         this.clear(); 
         this.draw();
      }, 1000/60)
    }    

    clear() {
        this.ctx.clearRect(
          0,
          0,
          this.ctx.canvas.width,
          this.ctx.canvas.height
        )
      }

    draw() {
        this.background.draw()
        this.car.draw()
      }
    
}


