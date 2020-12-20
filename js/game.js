const Obstacle_Frames = 120

class Game {
    constructor(ctx) {
      this.ctx = ctx
      this.background = new Background(ctx)
  
      this.drawInterval = undefined
      this.fps = 1000/60

      this.car = new Car(ctx)

      this.obstacles = [
      ]
      this.drawCount = 0
    }
  
    start() {
      if (!this.drawInterval){
        this.drawInterval = setInterval(() => {
          this.clear()
          
          this.move()
          
          this.draw()

          this.checkCrash()
          
          this.drawCount++

          if (this.drawCount % Obstacle_Frames === 0) {
            this.addObstacle()
            this.drawCount = 0
          }

        }, this.fps)
      }
    }

    finish(){
      clearInterval(this.drawInterval)
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

      this.obstacles = this.obstacles.filter(obstacle => obstacle.y <= 800)
    }
  
    draw() {
      this.background.draw();
      this.car.draw()
      this.obstacles.forEach(obstacle => obstacle.draw())
    }
  
    move() {
      this.car.move()
      this.obstacles.forEach(obstacle => obstacle.move())
      this.background.move()
    }

    onKeyEvent(event){
      this.car.onKeyEvent(event)
    }

    addObstacle(){
      const obstacleMaxWidth = this.ctx.canvas.width - this.car.w * 1.5

      const randomWidth = Math.floor(Math.random() * obstacleMaxWidth)
      
      const randomX = Math.floor(Math.random() * (this.ctx.canvas.width - randomWidth))

      this.obstacles.push(
        new Obstacle (this.ctx, randomX, 0, randomWidth)
      )
    }

    checkCrash(){
      if(this.obstacles.some(obstacle => this.car.crash(obstacle))){
        this.finish()
      }
    }
}
