const animatedApp = {
  name: "Island Racer",
  description: "Basic canvas app for playing to a car game",
  version: "1.0.0",
  licence: undefined,
  author: "Juan R.",
  canvasTag: undefined,
  car: undefined,
  ctx: undefined,
  canvasSize: {
    w: 500,
    h: 700,
  },
  framesIndex: 0,
  keyRPress: undefined,
  keyLPress: undefined,
  obstacles: [],
  score: 0,
  gameOver: false,
  interID: undefined,

  init() {
    this.setContext();
    this.car = new Car(
      this.ctx,
      65,
      130,
      500 / 2 - 65 / 2,
      this.canvasSize.h - 130 - 30
    );

    this.setEventListeners();

    this.start();
  },

  setContext() {
    this.canvasTag = document.querySelector("canvas");
    this.ctx = this.canvasTag.getContext("2d");
  },

  createRectangle(x, y, w, h, color) {
    if (color) this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  },

  createDashedLine(fX, fY, tX, tY, width, color) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width;
    this.ctx.setLineDash([60, 40]); // <-- patrón de repetición
    this.ctx.moveTo(fX, fY);
    this.ctx.lineTo(tX, tY);
    this.ctx.stroke();
    this.ctx.closePath();
  },
  removeObstacles() {
    this.obstacles = this.obstacles.filter(
      (elem) => elem.specs.position.y < 700
    );
  },

  setEventListeners() {
    document.onkeydown = (e) => {
      if (e.key === "ArrowLeft") this.keyLPress = true;
      else if (e.key === "ArrowRight") this.keyRPress = true;
    };
    document.onkeyup = (e) => {
      if (e.key === "ArrowLeft") this.keyLPress = false;
      else if (e.key === "ArrowRight") this.keyRPress = false;
    };
  },
  start() {
    const intervalID = setInterval(() => {
      this.clearAll();
      if (this.keyLPress === true && this.car.specs.position.x > 45)
        this.car.specs.position.x -= 10;
      if (
        this.keyRPress === true &&
        this.car.specs.position.x <
          this.canvasSize.w - 45 - this.car.specs.size.w
      )
        this.car.specs.position.x += 10;
      this.obstacles.forEach((e) => e.moveObtacle());
      this.framesIndex++;
      this.removeObstacles();
      this.drawAll();
      const carX = this.car.specs.position.x;
      const carY = this.car.specs.position.y;
      const carW = this.car.specs.size.w;
      const carH = this.car.specs.size.h;
      this.obstacles.forEach((e) => {
        const obstacleX = e.specs.position.x;
        const obstacleY = e.specs.position.y;
        const obstacleW = e.specs.size.w;
        const obstacleH = e.specs.size.h;

        if (
          carX < obstacleX + obstacleW &&
          carX + carW > obstacleX &&
          carY < obstacleY + obstacleH &&
          carH + carY > obstacleY
        ) {
          this.finishGame();
        }
      });
    }, 10);
    this.interID = intervalID;
  },
  finishGame() {
    clearInterval(this.interID);
    setInterval(() => {
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(0, 0, 500, 700);
      this.ctx.font = "20px arial";
      const text = `Game Over - Score ${this.score}`;
      this.ctx.fillStyle = "black";
      this.ctx.fillText(text, 100, 300);
    }, 10);
  },

  drawAll() {
    this.createRectangle(0, 0, 20, this.canvasSize.h, "green");
    this.createRectangle(20, 0, 10, this.canvasSize.h, "grey");
    this.createRectangle(30, 0, 15, this.canvasSize.h, "white");
    this.createRectangle(
      45,
      0,
      this.canvasSize.w - 90,
      this.canvasSize.h,
      "grey"
    );
    this.createRectangle(
      this.canvasSize.w - 45,
      0,
      15,
      this.canvasSize.h,
      "white"
    );
    this.createRectangle(
      this.canvasSize.w - 30,
      0,
      10,
      this.canvasSize.h,
      "grey"
    );
    this.createRectangle(
      this.canvasSize.w - 20,
      0,
      20,
      this.canvasSize.h,
      "green"
    );
    this.createDashedLine(
      this.canvasSize.w / 2,
      10,
      this.canvasSize.w / 2,
      this.canvasSize.h,
      10,
      "white"
    );
    this.car.drawCar(
      this.car.specs.position.x,
      this.car.specs.position.y,
      this.car.specs.size.w,
      this.car.specs.size.h
    );
    if (this.framesIndex % 200 === 0) {
      this.score++;
      this.obstacles.push(new Obstacle(this.ctx));
      let lastObstacle = this.obstacles.length - 1;
      this.obstacles[lastObstacle].drawObtacle();
    }
    this.obstacles.forEach((e) => e.drawObtacle());
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },
};
