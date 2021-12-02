const OBSTACLE_FRAMES =  120

class Game {
    constructor(ctx) {
        this.ctx = ctx;
  
        
        this.car = new Car(ctx, 225, 550);
        this.background = new Background(ctx);
        this.obstacles = []

        /* this.intervalId = undefined */
        this.fps = 1000 / 60

        this.obstacleFramesCount = 0
    }

    start() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {

          if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
            this.addObstacle()

            this.obstacleFramesCount = 0
          }

          this.clear()

          this.move()

          this.draw()

          this.obstacleFramesCount++
      
          }, this.fps)
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        /* this.obstacles = this.obstacles.filter(obstacle => obstacle.y + obstacle.height > 0) */
      }
    
      move() {
        this.background.move()
      }
    
      draw() {
        this.background.draw();
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.car.draw()
      }

      move() {
        this.car.move()
        this.obstacles.forEach(obstacle => obstacle.move())  
        this.background.move()   
      }

      addObstacle() {
        const max = this.ctx.canvas.width - 150
        const x = Math.floor(Math.random() * max)

        this.obstacles.push(new Obstacle(this.ctx, x, 0))
      }

      setupListeners(event) {
        this.car.setupListeners(event)
      }
}