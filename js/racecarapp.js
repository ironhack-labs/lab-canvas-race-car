const raceCarApp = {
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined,
  },
  intervalId: undefined,
  obstacles: [],
  framesCounter: 0,
  points: 0,

  init(canvas) {
    this.setContext(canvas);
    this.setCanvasDimensions(canvas);
    this.newCar();
    this.road = new Image();
    this.road.src = "../images/road.png";
    this.setEventListeners();
    this.refreshScreen();
  },

  setContext(canvas) {
    this.ctx = canvas.getContext("2d");
  },

  setCanvasDimensions(canvas) {
    this.canvasSize.w = 500;
    this.canvasSize.h = 700;
    canvas.setAttribute("width", this.canvasSize.w);
    canvas.setAttribute("height", this.canvasSize.h);
  },

  newCar() {
    this.newCar = new Car(this.ctx, this.canvasSize, 50, 70);
  },

  roadDraw() {
    this.ctx.drawImage(this.road, 0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  setEventListeners() {
    document.addEventListener("keydown", (e) => {
      console.log("izquierda");
      e.key === "a" ? (this.newCar.moveLeft = true) : null;
      e.key === "d" ? (this.newCar.moveRight = true) : null;
    });

    document.addEventListener("keyup", (e) => {
      e.key === "a" ? (this.newCar.moveLeft = false) : null;
      e.key === "d" ? (this.newCar.moveRight = false) : null;
    });
  },

  refreshScreen() {
    this.intervalId = setInterval(() => {
      this.checkIfColision();
      this.clearAll();
      this.drawAll();
      this.newCar.move();

      this.framesCounter++;

      if (this.framesCounter % 200 === 0) {
        this.points++;
      }

      if (this.framesCounter % 100 === 0) {
        this.createObstacle();
      }
    }, 1000 / 60);
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  drawAll() {
    this.roadDraw();
    this.newCar.carDraw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
    this.showPoints();
  },

  createObstacle() {
    const newObstacle = new Obstacle(this.ctx, this.canvasSize);
    this.obstacles.push(newObstacle);
  },

  showPoints() {
    // show scores
    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "purple";
    this.ctx.fillText("Points: " + this.points, 300, 90);
  },

  checkIfColision() {
    if (this.obstacles.length) {
      this.obstacles.forEach((elem) => {
        elem.draw();

        if (
          this.newCar.carPosition.x <
            elem.obstaclePosition.x + elem.obstacleSize.w - 10 &&
          this.newCar.carPosition.x + this.newCar.carSize.w - 10 >
            elem.obstaclePosition.x &&
          this.newCar.carPosition.y <
            elem.obstaclePosition.y + elem.obstacleSize.h - 10 &&
          this.newCar.carSize.h - 10 + this.newCar.carPosition.y >
            elem.obstaclePosition.y
        ) {
          clearInterval(this.intervalId);
        }
      });
    }
  },
};
