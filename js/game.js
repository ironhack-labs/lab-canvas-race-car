class Game {
    constructor(ctx){
        this.ctx = ctx;

        this. obstacles = [];

        this.car = new Car(ctx);
        this.background = new Background(ctx);

        this.intervalId = undefined;
        this.fps = 1000 / 60;

        this.obstacleFramesCount = 0;

        this.score = 0;
    }

    start(){
        if(!this.intervalId){
            this.intervalId = setInterval(() => {
            if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0){
                this.addObstacle()

                this.obstacleFramesCount = 0;
            }
            this.clear();
            this.draw();
            this.move();

            this.checkCollissions()
            this.obstacleFramesCount++
            }, this.fps)
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

    move(){
        this.obstacles.forEach(obstacle => obstacle.move());
        this.background.move();
        this.car.move();
    }
    
    addObstacle(){
        const max = this.ctx.canvas.width - 150
        const x = Math.floor(Math.random() * max)

        this.obstacles.push(
          new Obstacles(this.ctx, x , 0)
        )
      }
        
    draw(){
        this.background.draw();
        this.obstacles.forEach(obstacle => obstacle.draw());
        this.car.draw();
        this.drawScore()
    }


    drawScore() {
        this.ctx.save()
    
        this.ctx.fillStyle = 'black'
        this.ctx.font = ' bold 24px sans-serif'
    
        this.ctx.fillText(`Score: ${this.score} points`, 10, 30)
    
        this.ctx.restore()
      }

    onKeyDown(keyCode){
        this.car.onKeyDown(keyCode);
    }

    onKeyUp(keyCode){
        this.car.onKeyUp(keyCode);
    }

    checkCollissions() {
        const condition = this.obstacles.some(obstacle => this.car.collidesWith(obstacle))
    
        if (condition) {
          this.gameOver()
        }
      }

      gameOver(){
        clearInterval(this.intervalId)
        
        this.ctx.save()
    
        this.ctx.fillStyle = 'rgba(0, 0, 0, 1)'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 32px sans-serif'
        this.ctx.fillText(`Game Over!`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 3)
        this.ctx.fillText(`Your final score is: ${this.score}`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 1.5)
    
        this.ctx.restore()
      }
}