const drawingAll = {
  appName: "Canvas Car app",
  author: "Ricardo Molpeceres",
  version: "0.0.1",
  license: undefined,
  gameSize: { w: 800, h: 700 },
  ctx: undefined,
  car: undefined,
  framesIndex: 0, //obstaculoooooooooooos
  arrObstacles: [],

  init() {
    this.setContext();
    this.setSize();
    this.createCar();
    this.drawAll();
    this.setEventHandlers();
    this.createObstacle();
  },
  setContext() {
    this.ctx = document.querySelector("#canvas").getContext("2d");
    console.log(this.ctx);
  },
  setSize() {
    this.gameSize = {
      w: 500,
      h: 650,
    };
    document.querySelector("#canvas").setAttribute("width", this.gameSize.w);
    document.querySelector("#canvas").setAttribute("height", this.gameSize.h);
  },
  start() {
    setInterval(() => {
      this.framesIndex++; // Extra
      this.framesIndex % 40 === 0 ? this.createObstacle() : null; // Extra
      this.clearAll();
      this.drawAll();
      this.arrObstacles.forEach((elm) => {
        elm.move();
      });
    }, 50);
  },

  //   borderOfDisplay() {
  //     this.ctx.lineWidth = 5;
  //     this.ctx.strokeStyle = "black";
  //     this.ctx.strokeRect(0, 0, 500, 650);
  //   },

  drawBush() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 45, 650);
    this.ctx.fillRect(455, 0, 45, 650);
  },

  drawRoad() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(55, 0, 15, 650);
    this.ctx.fillRect(430, 0, 15, 650);
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(250, 3);
    this.ctx.setLineDash([45, 20]);
    this.ctx.lineTo(250, 647);
    this.ctx.stroke();
    this.ctx.closePath();
  },

  createCar() {
    this.car = new Car(this.ctx, 225, 500, 100, 100);
  },

  drawAll() {
    this.drawRoad();
    this.drawBush();
    this.car.draw();
    this.arrObstacles.forEach((element) => {
      element.draw();
    });
  },

  createObstacle() {
    this.arrObstacles.push(new Obstacles(this.ctx, 100, this.gameSize));
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
  },

  setEventHandlers() {
    document.addEventListener("keydown", (event) => {
      const { key } = event;
      key === "ArrowRight" ? this.car.moveRight() : null;
      key === "ArrowLeft" ? this.car.moveLeft() : null;
    });
  },
  checkCollision() {
    if (
      this.car.carPos.x < this.obstaclesPos.x + this.obstaclesSize.y &&
      this.car.carPos.x + this.car.carSize.w > this.obstaclesPos.x &&
      this.car.carPos.y < this.obstaclesPos.y + this.obstaclesSize.y &&
      this.car.carSize.h + this.car.carPos.y > this.obstaclesPos.y
    ) {
      console.log(this.obstaclesPos.y);
      // ¡colision detectada!
    }
  },
};
