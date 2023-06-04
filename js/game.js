class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Background(this.ctx);
    this.car = new Car(this.ctx);
    this.obstacles = [];

    this.intervalId = undefined;

    this.levelSpeed = 1;
    this.counter = 0;
    this.score = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.draw();
      this.checkCollisions();
      this.counter++;

      if (this.counter % 100 === 0) {
        this.addObstacle();
      }

      if (this.counter % 10 === 0) {
        this.score++;
      }

      if (this.counter === 200) {
        this.levelSpeed += 1;
        this.obstacles.forEach((obstacle) => (obstacle.speed += 1));
        this.counter = 0;
      }
    }, 1000 / 60);
  }

  draw() {
    this.background.draw();
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    });
    this.car.draw();
    
  }

  move() {
    this.background.move();
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
    });
    this.car.move();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.obstacles = this.obstacles.filter(
      (obstacle) => obstacle.x > -obstacle.width
    );
  }

  addObstacle() {
    const randomWidth = Math.floor(Math.random() * 200) + 50;
    const height = 30;
    const randomX = Math.floor(
      Math.random() * (this.ctx.canvas.width - randomWidth)
    );
    const color = "red";
    const speed = this.levelSpeed;
    const y = 0;
    const newObstacle = new Obstacle(
      this.ctx,
      randomX,
      y,
      randomWidth,
      height,
      color,
      speed
    );
    this.obstacles.push(newObstacle);
  }

  checkCollisions() {
    const collision = this.obstacles.some((obstacle) => obstacle.collidesWith(this.car));
    if (collision) {
      this.gameOver();
    }
  }

  gameOver() {
    clearInterval(this.intervalId);
    setTimeout(() => {
      this.ctx.font = '56px Arial';
      this.ctx.fillStyle = 'Blue';
      this.ctx.fillText(
        'Game Over',
        this.ctx.canvas.width / 2 - 150,
        this.ctx.canvas.height / 2,
        300);
    }, 0);
  }



  handleKeyDown(event) {
    if (event.key === "ArrowUp") {
      this.car.speedY = -1;
    } else if (event.key === "ArrowDown") {
      this.car.speedY = 1;
    } else if (event.key === "ArrowLeft") {
      this.car.speedX = -1;
    } else if (event.key === "ArrowRight") {
      this.car.speedX = 1;
    }
  }

  handleKeyUp(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      this.car.speedY = 0;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      this.car.speedX = 0;
    }
  }
}
