const GameCar = {
  ctx: undefined,
  car: undefined,
  gameSize: { w: undefined, h: undefined },
  framesIndex: 0,
  interval: null,

  init() {
    this.setContext();
    this.setSize();
    this.setEventHandlers();
    this.start();
  },

  setContext() {
    this.ctx = document.querySelector("#canvas").getContext("2d");
  },

  setSize() {
    this.gameSize = {
      w: 500,
      h: 800,
    };
    document.querySelector("#canvas").setAttribute("width", this.gameSize.w);
    document.querySelector("#canvas").setAttribute("height", this.gameSize.h);
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      this.framesIndex++;
      this.clear();
      this.drawAll();
      this.generateObstacle();
      this.clearObstacles();
      this.isCollision() ? this.gameOver() : null;
    }, 40);
  },

  drawAll() {
    this.backgroundRoad.draw();
    this.car.draw();
    this.obstacles.forEach((obs) => obs.draw());
  },

  reset() {
    this.backgroundRoad = new BackgroundRoad(this.ctx, this.gameSize);
    this.car = new Car(this.ctx, this.gameSize.w / 2, this.gameSize.h, 60, 100);
    this.obstacles = [];
  },

  setEventHandlers() {
    document.addEventListener("keydown", (event) => {
      const { key } = event;
      key === "ArrowRight" ? this.car.moveRight() : null;
      key === "ArrowLeft" ? this.car.moveLeft() : null;
    });
  },

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  },

  generateObstacle() {
    if (this.framesIndex % 150 === 0) {
      const width = this.getRandom(70, 200);
      const posX = this.getRandom(70, 280);
      const obstacle = new Obstacle(this.ctx, posX, 10, width, 30);
      this.obstacles.push(obstacle);
    }
  },

  clearObstacles() {
    this.obstacles = this.obstacles.filter(
      (obs) => obs.obstPos.y <= this.gameSize.h
    );
  },

  clear() {
    this.ctx.clearRect(0, 0, this.canvasHeight, this.canvasWidth);
  },

  isCollision() {
    return this.obstacles.some((obs) => {
      return (
        obs.obstPos.x < this.car.carPos.x + this.car.carSize.w &&
        obs.obstPos.x + obs.obstSize.w > this.car.carPos.x &&
        obs.obstPos.y < this.car.carPos.y + this.car.carSize.h &&
        obs.obstSize.h + obs.obstPos.y > this.car.carPos.y
      );
    });
  },

  gameOver() {
    clearInterval(this.interval);

    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h);

    this.ctx.font = "40px Goblin One";
    this.ctx.fillStyle = "#fff";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Game Over", this.gameSize.w / 2, this.gameSize.h / 2);
  },
};
