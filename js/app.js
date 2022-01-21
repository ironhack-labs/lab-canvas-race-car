const drawingApp = {
  ctx: undefined,
  car: undefined,
  gameSize: { w: undefined, h: undefined },
  framesIndex: 0,
  obstacles: [],

  init() {
    this.setContext();
    this.setSize();
    this.drawRoad();
    this.createCar();
    this.drawAll();
    this.setEventHandlers();
    this.createObstacle();
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

  createCar() {
    this.car = new Car(this.ctx, this.gameSize.w / 2, this.gameSize.h, 60, 100);
  },

  drawAll() {
    setInterval(() => {
      this.clearAll();
      this.drawRoad();
      this.car.draw();
      // this.checkCollisions();
      this.framesIndex++;

      if (this.framesIndex % 150 === 0) {
        this.createObstacle();
      }
    }, 40);
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

  createObstacle() {
    const width = this.getRandom(70, 200);
    const posX = this.getRandom(70, 280);
    const obstacle = new Obstacle(this.ctx, posX, 10, 3, width, 30);
    this.obstacles.push(obstacle);
  },

  drawRoad() {
    this.drawFilledRectangle();
    this.drawRegularLines();
    this.drawDashedLines();
    this.drawObstacles();
  },

  drawFilledRectangle() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.gameSize.w / 2 - 250, 0, 500, this.gameSize.h);
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(this.gameSize.w - 460, 0, 420, this.gameSize.h);
  },

  drawRegularLines() {
    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = "white";

    this.ctx.beginPath();
    this.ctx.moveTo(60, 0);
    this.ctx.lineTo(60, this.gameSize.h);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = "white";

    this.ctx.beginPath();
    this.ctx.moveTo(440, 0);
    this.ctx.lineTo(440, this.gameSize.h);
    this.ctx.stroke();
    this.ctx.closePath();
  },

  drawDashedLines() {
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(250, 0);
    this.ctx.setLineDash([50, 20]);
    this.ctx.lineTo(250, this.gameSize.h);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.setLineDash([0, 0]);
  },

  drawObstacles() {
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    });
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
  },

  // gameOver() {
  //   clearInterval(this.interval);

  //   this.ctx.save();
  //   this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  //   this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h);

  //   this.ctx.font = "40px Goblin One";
  //   this.ctx.fillStyle = "#fff";
  //   this.ctx.textAlign = "center";
  //   this.ctx.fillText("Game Over", this.gameSize.w / 2, this.gameSize.h / 2);
  // },

  // checkCollisions() {
  //   if (this.obstacles.some((obstacle) => this.car.collidesWith(obstacle))) {
  //     // this.gameOver();
  //   }
  // },
};
