const GAME_FRAMES = 1000 / 60;
const OBSTACLE_FRAMES = 150;

class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.interval = null;

    this.background = new Background(ctx);
    this.player = new Player(ctx);
    this.score = new Score(ctx);
    this.obstacles = [];

    this.framesCount = 0;

    this.obstaclesSpeed = 2;
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.clear();

        this.framesCount++;

        if (this.framesCount % OBSTACLE_FRAMES === 0) {
          this.addObstacle();
        }

        this.checkCollisions();
      }, GAME_FRAMES);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.obstacles = this.obstacles.filter(
      (obstacle) => obstacle.x + obstacle.width >= 0
    );
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.score.draw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
  }

  move() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach((obstacle) => obstacle.move());
  }

  onKeyEvent(event) {
    
    this.player.onKeyEvent(event);
  }

  addObstacle() {
    let minSpace = this.ctx.canvas.width - this.player.width * 2;

    let obstWidth = Math.floor(Math.random() * minSpace);

    if (obstWidth < 80) {
      return (obstWidth = 80);
    }

    const obstPosX = Math.floor(
      Math.random() * (this.ctx.canvas.width - obstWidth)
    );

    this.obstacles.push(
      new Obstacle(this.ctx, obstPosX, 0, obstWidth, this.obstaclesSpeed)
    );
  }

  gameOver() {
    clearInterval(this.interval);

    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.font = "50px Arial";
    this.fillStyle = "red";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "Game Over",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.width / 2
    );
    this.ctx.restore();

    this.ctx.save();
    this.ctx.font = "50px Arial";
    this.ctx.fillStyle = "#fff";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `${this.score.score}`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 + 35
    );
    this.ctx.restore();
  }

  checkCollisions() {
    if (this.obstacles.some((obstacle) => this.car.collidesWith(obstacle))) {
      this.gameOver();
  }
}
}
