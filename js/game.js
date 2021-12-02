class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);
        this.car = new Car(ctx, 225, 550);
        this.obstacles = new Obstacle(ctx, 70, 350)

        this.intervalId = undefined
        this.fps = 1000/60

        
    }

    start() {
        this.intervalId = setInterval(() => {

            this.clear()

            this.move()

            this.draw()
      
          }, 1000 / 60)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      }
    
      move() {
        this.background.move()
      }
    
      draw() {
        this.background.draw();
        this.car.draw()
        this.obstacles.draw()
      }

      move() {
        this.car.move()
        this.background.move()
        this.obstacles.move()
      }

      setupListeners(event) {
        this.car.setupListeners(event)
      }
}