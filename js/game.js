const OBSTACLE_FRAMES =  120

class Game {
    constructor(ctx) {
      this.ctx = ctx
  
     
  
     
  
      this.road = new Road(ctx)    
      this.car = new Car(ctx, 30, 300)    

      this.obstacles = []

      this.intervalId = undefined
      
      this.obstacleFramesCount = 0

     

    }

    start() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
            this.addObstacle()
  
            this.obstacleFramesCount = 0
          }
    
          // clear 
    
          this.clear()
    
          // move
          this.move()
    
          // draw
          this.draw()

          this.checkCollissions()
        this.obstacleFramesCount++
    
        }, 1000 / 60)
      }
    }
    
      clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        const previousObstaclesLength = this.obstacles.length

        this.obstacles = this.obstacles.filter(obstacle => obstacle.y + obstacle.height < 700)
    
        if (this.obstacles.length < previousObstaclesLength) {
          this.score++
        }
      }
    
      move() {
        
        this.road.move()
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.car.move()
      }
    
      draw() {
        this.road.draw();
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.car.draw()
      }


      addObstacle() {
        const max = this.ctx.canvas.width - 100
    
        const y = Math.floor(Math.random() * max)
    
        this.obstacles.push(
          new Obstacle(this.ctx, y, 0)
        )
      }

      setupListeners(event) {
        this.car.setupListeners(event)
      }

      checkCollissions() {
        const condition = this.obstacles.some(obstacle => this.car.collidesWith(obstacle))
    
        if (condition) {
          this.gameOver()
        }
      }

      gameOver() {
        clearInterval(this.intervalId)
    
        this.ctx.save()
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 32px sans-serif'
        this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)
    
        this.ctx.restore()
      }
    
  
  

  }