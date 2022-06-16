class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.car = new Car(this.ctx);
    this.obstacles = [];
    this.tickObstacle = 0;
    this.obstacleSide = false;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.checkCollisions();
      this.move();
      this.tickObstacle++;
      this.changePoints();

      if (this.tickObstacle % 160 === 0) {
        this.addObstacle();
      }
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  move() {
    this.background.move();
    this.car.move();
    this.obstacles.forEach((obs) => obs.move());
  }

  draw() {
    this.background.draw();
    this.car.draw();
    this.obstacles.forEach((obs) => obs.draw());
  }

  addObstacle() {
    this.obstacles.push(new Obstacle(this.ctx, this.obstacleSide));
    this.obstacleSide = !this.obstacleSide;
  }

  checkCollisions() {
    let carVsObs = this.obstacles.find((obs) => obs.collide(this.car));

    if (carVsObs) {
      this.gameOver();
    }
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    this.ctx.font = "50px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }

  changePoints() {
    const points = document.querySelector("h1 span");
    if (this.obstacles.length < 2) {
      points.textContent = "0";
    } else {
      points.textContent = this.obstacles.length - 2;
    }
  }
}
