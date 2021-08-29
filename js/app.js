const carGame = {
  ctx: undefined,
  canvasSize: { w: undefined, h: undefined },
  carMoveLeft: false,
  carMoveRight: false,
  obstaclesArr: [],
  speed: 2,
  intervalId: undefined,
  score: 0,
  framesCounter: 0,

  init(canvas) {
    this.setContext(canvas);
    this.setCanvasSize(canvas);
    this.setRoad();
    this.setCar();
    this.createObstacle();
    this.drawAll();
    this.setListeners();
    this.updateCanvas();
  },

  setContext(canvas) {
    this.ctx = canvas.getContext("2d");
  },

  setCanvasSize(canvas) {
    (this.canvasSize.w = 600),
      (this.canvasSize.h = 600),
      canvas.setAttribute("width", this.canvasSize.w);
    canvas.setAttribute("height", this.canvasSize.h);
  },

  setCar() {
    this.newCar = new Car(this.ctx, 50, 100, this.canvasSize);
  },

  drawCar() {
    this.newCar.drawCar();
  },

  carMovement() {
    if (this.carPositionX <= this.canvasSize.w - 100 && this.carMoveRight) {
      this.carPositionX += 10;
    }
    if (this.carPositionX >= 50 && this.carMoveLeft) {
      this.carPositionX -= 10;
    }
  },

  setRoad() {
    this.roadImage = new Image();
    this.roadImage.src = "./images/road.png";
    this.roadWidth = this.canvasSize.w;
    this.roadHeigth = this.canvasSize.h;
  },

  drawRoad() {
    this.ctx.drawImage(this.roadImage, 0, 0, this.roadWidth, this.roadHeigth);
  },

  createObstacle() {
    this.intervalId = setInterval(() => {
      const randomWidth = Math.trunc(Math.random() * (300 - 100) + 100);
      const randomHeight = Math.trunc(Math.random() * (100 - 70) + 70);
      const xRandomPosition = Math.trunc(
        Math.random() * (this.canvasSize.w - 100)
      );

      const newObstacle = new Obstacle(
        this.ctx,
        randomWidth,
        randomHeight,
        this.canvasSize,
        xRandomPosition,
        this.speed
      );

      this.obstaclesArr.push(newObstacle);
    }, 1200);
  },

  drawObstacles() {
    this.obstaclesArr.forEach((obstacle) => obstacle.draw());
  },

  showScore() {
    this.ctx.font = "25px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score : " + this.score, 300, 90);
  },

  drawAll() {
    this.drawRoad();
    this.newCar.drawCar();
    this.drawObstacles();
    this.showScore();
  },

  checkIfCollision() {
    if (this.obstaclesArr.length) {
      this.obstaclesArr.forEach((elem) => {
        elem.draw();

        if (
          this.newCar.carPositionX <
            elem.obstaclePosition.x + elem.obstacleSize.w - 10 &&
          this.newCar.carPositionX + this.newCar.carSize.w - 10 >
            elem.obstaclePosition.x &&
          this.newCar.carPositionY <
            elem.obstaclePosition.y + elem.obstacleSize.h - 10 &&
          this.newCar.carSize.h - 10 + this.newCar.carPositionY >
            elem.obstaclePosition.y
        ) {
          clearInterval(this.intervalId);
        }
      });
    }
  },

  setListeners() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.newCar.moveLeft = true;
      }
      if (e.key === "ArrowRight") {
        this.newCar.moveRight = true;
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") {
        this.newCar.moveLeft = false;
      }
      if (e.key === "ArrowRight") {
        this.newCar.moveRight = false;
      }
    });
  },

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  updateCanvas() {
    this.intervalId = setInterval(() => {
      this.checkIfCollision();
      this.clearCanvas();
      this.drawAll();
      this.carMovement();
      this.framesCounter++;

      if (this.framesCounter % 200 === 0) {
        this.score++;
      }
    }, 1000 / 60);
  },
};
