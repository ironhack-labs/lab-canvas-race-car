const app = {
  appName: "Canvas Race game",
  author: "Diego",
  version: "1.0.0",
  license: undefined,
  // Defino el áerea donde voy a trabajar
  gameSize: { w: undefined, h: undefined },
  // Contexto de trabajo
  ctx: undefined,
  car: undefined,
  rndXObstacle: undefined,
  rndYObstacle: undefined,
  rndWObstacle: undefined,
  framesIndex: 0,
  obstacles: [],
  init() {
    this.setContext();
    this.setSize();
    this.createCar();
    this.createObstacles();
    this.drawAll();
    this.setEventHandlers();
  },
  setContext() {
    this.ctx = document.querySelector("#canvas").getContext("2d");
    console.log(this.ctx);
  },
  setSize() {
    // Seteo las propiedades a las medidas de la ventana
    this.gameSize = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
    this.gameSize.w = document.querySelector("#canvas").getAttribute("width");
    this.gameSize.h = document.querySelector("#canvas").getAttribute("height");
  },
  drawFilledRectangleBackgrnd() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h);
  },
  drawFilledRectangleRoad() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(50, 0, 400, this.gameSize.h);
  },
  drawFilledRectangleLines() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(70, 0, 20, this.gameSize.h);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(410, 0, 20, this.gameSize.h);
  },
  drawDashedLines() {
    this.ctx.lineWidth = 20;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(240, 0);
    this.ctx.setLineDash([60, 20]);
    this.ctx.lineTo(240, this.gameSize.h);
    this.ctx.stroke();
    this.ctx.closePath();
  },
  createCar() {
    this.car = new Car(this.ctx, 250, this.gameSize.h - 60, 50, 50);
  },
  createObstacles() {
    //console.log(this.rndXObstacle, this.rndYObstacle, this.rndWObstacle);
    this.randomValuesObstacles();
    this.obstacles.push(
      new Obstacle(
        this.ctx,
        this.rndXObstacle,
        this.rndYObstacle,
        this.rndWObstacle,
        10,
        this.gameSize
      )
      //new Obstacle(this.ctx, 0, 300, 120, 20, this.gameSize),
      //new Obstacle(this.ctx, 0, 500, 220, 8, this.gameSize)
    );
  },
  randomValuesObstacles() {
    this.rndXObstacle = Math.floor(Math.random() * (300 - 50) + 50);
    this.rndYObstacle = Math.floor(Math.random() * (100 - 50) + 50);
    this.rndWObstacle = Math.floor(Math.random() * (200 - 50) + 50);
  },
  drawAll() {
    setInterval(() => {
      this.framesIndex++; // Extra
      this.framesIndex % 20 === 0 ? this.createObstacles() : null; // Extra
      this.clearAll();
      this.drawFilledRectangleBackgrnd();
      this.drawFilledRectangleRoad();
      this.drawFilledRectangleLines();
      this.drawDashedLines();
      this.obstacles.forEach((elm) => {
        elm.move();
        elm.draw();
      });
      this.car.draw();
      this.checkCollision();
    }, 100);
  },
  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
  },
  setEventHandlers() {
    document.addEventListener("keydown", ({ key }) => {
      key === "ArrowRight" ? this.car.moveRight() : null;
      key === "ArrowLeft" ? this.car.moveLeft() : null;
    });
  },
  checkCollision() {
    this.obstacles.forEach((elm) => {
      if (
        // this.car.carPos.x < elm.obstaclePos.x + elm.obstacleSize.w &&
        // this.car.carPos.x + this.car.carPos.w > elm.obstaclePos.x &&
        //this.car.carPos.y <=
        //elm.obstaclePos.y + 10 //&&
        //this.car.carPos.h + this.car.carPos.y > elm.obstaclePos.y
        this.car.carPos.x < elm.obstaclePos.x + elm.obstacleSize.w - 50 &&
        this.car.carPos.x + this.car.carSize.w - 50 > elm.obstaclePos.x &&
        this.car.carPos.y < elm.obstaclePos.y + elm.obstacleSize.h - 50 &&
        this.car.height - 50 + this.car.carPos.y > elm.obstaclePos.y
      ) {
        alert("pencaste!!");
      }
    });
  },
};
