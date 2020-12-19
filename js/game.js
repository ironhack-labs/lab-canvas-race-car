class Game{
    constructor(ctx){
        this.ctx = ctx
        
        this.ctx.canvas.width= 500;
        this-ctx.canvas.height= 700;

        this.road = new Background(ctx)
        this.car= new Car (this.ctx.canvas.width/2, this.ctx.canvas.height/2)

        this.obstacles= []
        this.obstacleCount= 0;

        this.drawInterval = undefined
    }


    start() {
        this.inverval = setInterval(() => {
          this.clear()
          this.draw()
          this.move()
          this.checkCollisions()
          this.obstacleCount++

          if(this.obstacleCounter % 120 ===0){ 
            this.addObstacle()

            this.obstacleCounter = 0;
          }

        }, 1000 / 60)
      }

      clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      }

      draw(){
        this.background.draw()
        this.car.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())

        this.ctx.save()
        this.ctx.fillText(`Score: ${this.score}`, 80, 25)
        this.ctx.restore()
      }
      move(){
        this.background.move()
        this.car.move()
        this.obstacles.forEach(obstacle => obstacle.move())
      }
    
      onKeyEvent(event){
      this.car.onKeyEvent(event)
      }

      addObstacle(){
        const maxSpace = this.ctx.canvas.width - this.car.width*2.25
        const minSpace = 250
        const theWidth = Math.random()*(maxSpace-minSpace) + minSpace

        this.obstacles.push(
          new Obstacle(this.ctx,Math.floor(Math.random()*this.ctx.canvas.width/2),0,theWidth)
        )
      }

      checkCollisions() {
        if (this.obstacles.some(obstacle => this.car.collidesWith(obstacle))) {
          this.gameOver()
        }
      }

      gameOver() {
        clearInterval(this.drawInterval)

        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.save()
         this.ctx.font = '50px Calibri'
         this.ctx.fillStyle = 'red'
         this.ctx.textAlign = 'center'
         this.ctx.fillText(
          'Game over!',
          this.canvas.width / 2,
          this.canvas.height / 2,
        )
        this.ctx.restore()

        this.ctx.save()
        this.ctx.font = '40px Calibri'
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.fillText(
          `Your final score is ${this.showPoints()}`,
          this.ctx.canvas.width / 5,
          this.ctx.canvas.height / 2,
        )
      this.ctx.restore()

        }
} 
