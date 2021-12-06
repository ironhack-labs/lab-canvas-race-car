const obstaclesFrames = 120

class Game {
    constructor(ctx) {
      this.ctx = ctx;

      this.road = new Road(ctx);
      this.car = new Car(ctx);

      this.obstacles = []
      this.obstaclesFrameCount = 0

      this.intervalId = undefined;
      this.fps = 1000 / 60;

      this.score = 0
    }
  
    startGame() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          if (this.obstaclesFrameCount % obstaclesFrames === 0 ) {
            this.addObstacle();
            this.obstaclesFrameCount = 0            
          }

          this.clear()
          this.move()
          this.draw()
          this.checkCollisions()
          
          this.obstaclesFrameCount++
        }, this.fps);
      }
    }

    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

      const previousObstaclesLength = this.obstacles.length

      this.obstacles = this.obstacles.filter(obstacle => obstacle.y + obstacle.height < this.ctx.canvas.height)
      
      if (this.obstacles.length < previousObstaclesLength) {
        this.score++
      }
    }

    draw() {
      this.road.draw()
      this.car.draw()
      this.obstacles.forEach(obstacle => obstacle.draw())
      this.drawScore()
    }
    
    move() {
      this.car.move()
      this.obstacles.forEach(obstacle => obstacle.move())
    }

    addObstacle() {
      this.obstacles.push(new Obstacles(this.ctx, Math.floor(Math.random() * (370 - 70) + 60)))
    }

    checkCollisions() {
      const condition = this.obstacles.some(obstacle => this.car.colidesWith(obstacle))

      if (condition) {
        this.gameOver()
      }
    }

    drawScore() {
      this.ctx.save()

      this.ctx.fillStyle = 'black'
      this.ctx.font = 'bold 20px sans-serif'
      this.ctx.fillText(`Score: ${this.score} points`, 20, 40)

      this.ctx.restore()
    }

    setUpListeners(e) {
      this.car.setUpListeners(e);
    }

    gameOver() {
      clearInterval(this.intervalId)

      this.ctx.save()

      this.ctx.fillStyle = 'rgba (0, 0, 0, 0.7)'
      this.ctx.fillRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height)

      this.ctx.fillStyle = 'white'
      this.ctx.textAlign = 'center'
      this.ctx.font = 'bold 30px sans-serif'
      this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)

      this.ctx.restore()
    }

  }