const OBSTACLES_FRAMES = 120;
const SPEED_INCREMENT_FRAMES = 240;

class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 500;
    this.canvas.height = 700;

    this.fps = 1000 / 30;

    this.background = new Background(this.ctx);

    this.drawInterval = undefined;

    this.car = new Car(this.ctx);
    this.obstacles = [];

    this.framesCount = 0;

    this.obstaclesSpeed = 4;

    this.count = 0;
  }
  startGame() {
    if (!this.drawInterval) {
      this.drawInterval = setInterval(() => {
        this.clear();
        this.move();
        this.draw();

        this.checkCollisions();
        this.framesCount++;

        if (this.framesCount % OBSTACLES_FRAMES === 0) {
          this.addObstacles();
        }
      }, this.fps);
    }
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.pipes = this.obstacles.filter(obstacle => obstacle.x + obstacle.width >= 0)
  }

  draw() {
    this.background.draw();
    this.car.draw();
    this.obstacles.forEach(obstacle => obstacle.draw())
  }

  move() {
    this.car.move();
    this.obstacles.forEach(obstacle => obstacle.move())
  }

  onKeyEvent(event) {
    this.car.onKeyEvent(event);
  }

  addObstacles() {

    const randomX = Math.floor(Math.random() * this.canvas.width)

    this.obstacles.push(
      new Obstacle(this.ctx, randomX, 0, randomX, this.obstaclesSpeed),
    )
  }

  

  gameOver() {
    clearInterval(this.drawInterval)

    this.ctx.save()
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.ctx.font = "28px Goblin One"
    this.ctx.fillStyle = "#fff"
    this.ctx.textAlign = "center"
    this.ctx.fillText(
      "Game Over",
      this.canvas.width / 2,
      this.canvas.height / 2,
    )
    this.ctx.restore()
  }

  

  checkCollisions() {
    if (this.obstacles.some(obstacle => this.car.collidesWith(obstacle))) {
      this.gameOver()
    } else {
        this.count += 1;
        console.log(this.count)
    }
  }
}
