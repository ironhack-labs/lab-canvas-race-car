const OBSTACLES_FRAMES = 120;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

class Game {
    constructor(ctx) {
      this.ctx = ctx;

      this.interval = null;

      this.fps = 1000 / 60;
  
      this.canvasHeight = this.ctx.canvas.height;
      this.canvasWidth = this.ctx.canvas.width;

      this.background = new Background(ctx);
      this.car = new Car(ctx)
      this.obstacles = []

      this.framesCount = 0

      this.ObstaclesSpeed = -1
    }
  
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.clear()
          this.move()
          this.draw()
          this.checkCollisions()
          this.framesCount++

          if (this.framesCount % OBSTACLES_FRAMES === 0) {
            this.addPairOfObstacles()
          }
        }, this.fps)
      }
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.canvasHeight, this.canvasWidth)
      this.obstacles = this.obstacles.filter(barrier => barrier.y < this.canvasHeight)
    }
  
    draw() {
      this.background.draw()
      this.car.draw()
      this.obstacles.forEach(barrier => barrier.draw())
    }
  
    move() {
      this.background.move()
      this.obstacles.forEach(barrier => barrier.move())
    }

    addPairOfObstacles() {
      const maxSize = 200
      const border = 65

      const size = random(100, maxSize)
      const x = random(border, this.canvasWidth - maxSize - border)
  
      this.obstacles.push(
        new Obstacles(this.ctx, x, size)
      )
    }


    gameOver() {
      clearInterval(this.interval)

      this.ctx.save()
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

      this.ctx.font = "40px Goblin One"
      this.ctx.fillStyle = "#fff"
      this.ctx.textAlign = "center"
      this.ctx.fillText(
        "Game Over",
        this.canvasWidth / 2,
        this.canvasHeight / 2,
      )
      this.ctx.restore()
    }
  
    checkCollisions() {
      if (this.obstacles.some(barrier => this.car.collidesWith(barrier))) {
        this.gameOver()
      }
    }
  }

