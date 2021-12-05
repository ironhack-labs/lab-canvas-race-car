class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.background = new Background(ctx)    
    this.player = new Player(ctx, 30, 300) 

    this.intervalId = undefined   
    // obstacle
    this.obstacles = [];
    this.obstacleFramesCount = 0;
    // score
    this.score = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
        this.addObstacle();
        this.obstacleFramesCount = 0;
      }
      this.obstacleFramesCount++;
      // clear 
      this.clear()

      // move
      this.move()

      // draw
      this.draw()

    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    const previousObstaclesLength = this.obstacles.length;
    this.obstacles = this.obstacles.filter(obstacle => obstacle.y  < this.ctx.canvas.height);
    if (this.obstacles.length < previousObstaclesLength) {
      this.score++;
   }
  }

  move() {
    this.background.move()
    this.obstacles.forEach(obstacle => obstacle.move());
  }

  draw() {
    this.background.draw();
    this.player.draw()
    this.obstacles.forEach(obstacle => obstacle.draw());
    this.drawScore();
  }

  addObstacle() {
    // set the random position of the obstacle
    const max = this.ctx.canvas.width - 100;
    const randomX = Math.floor(Math.random() * max);

    // set the random size of the obstacle min 30, max 120
    const randomWidth = Math.floor(Math.random() * 120 + 30);
    this.obstacles.push(new Obstacle(this.ctx, randomX, 0,randomWidth));
  }

  onKeyDown(keyCode) {
    this.player.onKeyDown(keyCode)
  }
  drawScore() {
    this.ctx.save();

    this.ctx.fillStyle = 'black';
    this.ctx.font = ' bold 24px sans-serif';

    this.ctx.fillText(`Score: ${this.score} ptos`, 20, 40);

    this.ctx.restore();
  }
}