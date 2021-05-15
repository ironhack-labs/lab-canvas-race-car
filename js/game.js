const GAME_FRAMES = 1000 / 60;
const OBSTACLE_FRAMES = 150;

class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.interval = null;

    this.background = new Background(ctx);

    this.car = new Car(ctx);
    this.score = new Score(ctx);
    this.obstacles = [];

    this.framesCount = 0;

    this.obstaclesSpeed = 2;
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.clear();

        this.move();

        this.draw();

        this.checkCollisions();

        this.framesCount++;

        if (this.framesCount % OBSTACLE_FRAMES === 0) {
          this.addObstacle();
        }
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
    this.car.draw();
    this.score.draw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
  }

  move() {
    this.background.move();
    this.car.move();
    this.obstacles.forEach((obstacle) => obstacle.move());
  }

  onKeyEvent(event) {
    this.car.onKeyEvent(event);
  }

  addObstacle() {
    let minSpace = this.ctx.canvas.width - this.car.width * 2;

    let obsWidth = Math.floor(Math.random() * minSpace);

    if (obsWidth < 80) {
      return (obsWidth = 80);
    }

    const obstPosX = Math.floor(
      Math.random() * (this.ctx.canvas.width - obsWidth)
    );

    this.obstacles.push(
      new Obstacle(this.ctx, obstPosX, 0, obsWidth, this.obstaclesSpeed)
    );
  }

  gameOver() {
    clearInterval(this.interval);

    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.font = "50px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "Game Over",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 - 85
    );
    this.ctx.restore();

    this.ctx.save();
    this.ctx.font = "50px Arial";
    this.ctx.fillStyle = "#fff";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `Your final score`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 - 25
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
