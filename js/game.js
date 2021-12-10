class Game {
    constructor(ctx) {
        this.ctx = ctx

        this.background = new Background(ctx)    
        this.player = new Player(ctx, 225, 550)
        this.obstacle = 

        this.obstacles = []
        this.obstacleFramesCount = 0

        this.intervalId = undefined
        this.fps = 1000 / 60
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

            this.checkCollissions()
            this.obstacleFramesCount++
   
            }, this.fps)
        }
    }
    
    move() {
        this.background.move()
        this.player.move()
        this.obstacles.forEach(obstacle => obstacle.move())
    }

    draw() {
        this.background.draw()
        this.player.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    addObstacle() {
        const max = this.ctx.canvas.width - 150
        const x = Math.floor(Math.random() * max)
        this.obstacles.push(
            new Obstacle(this.ctx, x, 0)
        )
    }

    setupListeners(event) {
        this.player.setupListeners(event)
    }

    checkCollissions() {
        const condition = this.obstacles.some(obstacle => this.player.collidesWith(obstacle))
    
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