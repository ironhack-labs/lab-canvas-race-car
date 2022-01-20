const drawingApp = {
  appName: "Island Racer",
  author: "Estefanía Lamas",
  version: "1.0.0",
  license: undefined,
  gameSize: { w: undefined, h: undefined },
  ctx: undefined,
  car: undefined,
  framesIndex: 0,
  obstacles: [],

  init() {
    this.setContext();
    this.setSize();
    this.start();
  },
  setContext() {
    this.ctx = document.querySelector("#canvas").getContext("2d");
    console.log(this.ctx);
  },
  setSize() {
    this.gameSize.x = document.querySelector("#canvas").getAttribute("width");
    this.gameSize.y = document.querySelector("#canvas").getAttribute("height");
  },

  start() {
    this.car = new Car(this.ctx, 200, 550, 100);
    this.car.init();
    this.drawAll();
    this.setEventHandlers();
    this.createObstacle();
  },

  drawAll() {
    setInterval(() => {
      this.clearAll();
      this.drawGrass();
      this.drawRoad();
      this.drawWhiteLine1();
      this.drawWhiteLine2();
      this.drawDashedLine();
      this.car.draw();
    }, 40);
  },

  drawGrass() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.gameSize.x, this.gameSize.y);
    this.ctx.beginPath();
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(this.gameSize.w - 100, 100);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "red";
  },

  drawRoad() {
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(40, 0, this.gameSize.x - 80, this.gameSize.y);
    // De -80, hay que quitarle la mitad (+40)
    this.ctx.beginPath();
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(this.gameSize.w - 100, 100);
    this.ctx.stroke();
    this.ctx.closePath();
  },

  drawWhiteLine1() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(50, 0, 15, this.gameSize.y);
    // El tercer número es el ancho de la columna, no queremos que abarque todo
    this.ctx.beginPath();
    this.ctx.moveTo(50, 50);
    this.ctx.lineTo(this.gameSize.w - 50, 50);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.lineWidth = 2;
  },

  drawWhiteLine2() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(435, 0, 15, this.gameSize.y);
    this.ctx.beginPath();
    this.ctx.moveTo(50, 50);
    this.ctx.lineTo(this.gameSize.w - 50, 50);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.lineWidth = 2;
  },

  drawDashedLine() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(this.gameSize.x / 2, 0);
    this.ctx.setLineDash([10, 10]);
    this.ctx.lineTo(this.gameSize.x / 2, this.gameSize.y);
    this.ctx.stroke();
    this.ctx.closePath();
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

  createObstacle() {
    setInterval(() => {
      this.clearScreen();
      this.framesIndex++;
      this.framesIndex % 50 === 0 ? this.createObstacle() : null;
      this.obstacle.forEach((elm) => {
        this.obstacles.push(new obstacle());
      });
    }, 40);
  },
};
