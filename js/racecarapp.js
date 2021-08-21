const raceCarApp = {
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined,
  },
  init(canvas) {
    this.setContext(canvas);
    this.setCanvasDimensions();
    this.newCar();
    this.road = new Image();
    this.road.src = "../images/road.png";
    this.setEventListeners;
    this.refreshScreen();
  },

  setContext(canvas) {
    this.ctx = canvas.getContext("2d");
  },

  setCanvasDimensions() {
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
      e.key === "d" ? (this.newCar.moveRight = true) : null;
      e.key === "a" ? (this.newCar.moveLeft = true) : null;
    });
  },

  refreshScreen() {
    this.clearAll();
    this.drawAll();

    requestAnimationFrame(() => {
      this.refreshScreen;
    });
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  drawAll() {
    this.roadDraw();
    this.newCar.carDraw();
  },
};
