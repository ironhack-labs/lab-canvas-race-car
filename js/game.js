class Game {
    constructor(ctx) {
      this.ctx = ctx;
      this.intervalId = null;
      this.background = new Background(this.ctx);
      this.car = new Car(this.ctx);
      this.obstacle = [];
      this.tickObstacle = 0;
      
    }

    start() {
      this.intervalId = setInterval( () => {
         this.clear(); 
         this.draw();
         this.move();
         this.tickObstacle++

         if(this.tickObstacle % 100 === 0) {
          this.addObstacle()
        } 
      } , 1000/60)
    }    

    addObstacle() {
      this.obstacle.push(new Obstacle(this.ctx))
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
      this.obstacle.forEach(obs => obs.draw());
      }

    move() {
      this.background.move()
      this.car.move()
      this.obstacle.forEach(obs => obs.move());
    }
    
}


