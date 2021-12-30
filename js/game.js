const OBSTACLE_FRAMES = 120;


class Game {
    constructor(ctx) {
      this.ctx = ctx

      this.car = new Player(ctx);
      this.background = new Background(ctx);
      this.obstacles = [];

      this.intervalId = undefined;
      this.obstacleFramesCount= 0;
      this.score = 0;
    }

    start() {  
      if (!this.intervalId){
      this.intervalId = setInterval(() => {
        if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
          this.addObstacle()
          this.obstacleFramesCount = 0
        }

        this.clear()

        this.move()

        this.draw()
        this.checkCollissions()
        this.obstacleFramesCount++;
      }, 1000 / 60)
    }
    }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        const previousObstaclesLength = this.obstacles.length;

        this.obstacles = this.obstacles.filter(obstacle => obstacle.y + this.ctx.canvas.height);

    if(this.obstacles.length < previousObstaclesLength) {
        this.score++;
    }
  }

  move() {
    this.background.move();
    this.obstacles.forEach(obstacle => obstacle.move())
    this.car.move();
  }

  addObstacle() {
    const max = this.ctx.canvas.width - 100
    const y = Math.floor(Math.random() * max)
    this.obstacles.push(
      new Obstacle(this.ctx, y , 0)
    )
  }

  draw() {
    this.background.draw();
    this.obstacles.forEach(obstacle => obstacle.draw())
    this.drawScore();
    this.car.draw();
  }

  drawScore(){
    this.ctx.save();

    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 24px sans-serif';
    this.ctx.fillText(`Score: ${this.score} ptos`, 85, 50);

    this.ctx.restore();
}

  setUpListeners(event) {
    this.car.setUpListeners(event);
  }

  checkCollissions(){
    const condition = this.obstacles.some(obstacle => this.car.collidesWith(obstacle));

    if (condition){
        this.gameOver();
      }
}

gameOver(){
  clearInterval(this.intervalId);

  this.ctx.save();

  this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);


  this.ctx.fillStyle = 'red';
  this.ctx.textAlign = 'center';
  this.ctx.font = 'bold 24px sans-serif';
  this.ctx.fillText(`Game Over :(`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 - 30);
  this.ctx.fillStyle = 'white';
}

}
