const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  background: undefined,
  player: undefined,
  obstacles: [],

  keys: {
    LEFT: 37,
    RIGHT: 39,
  },

  init() {
    this.setContext();
    this.setDimensions();
    this.start();
  },

  setContext() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
  },

  setDimensions() {
    this.width = 500;
    this.height = 700;

    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      this.clear();
      this.drawAll();
    }, 1000 / this.FPS);
    this.generateObstacles();
    this.clearObstacles();
  },

  reset() {
    this.background = new Road(this.ctx, this.width, this.height);
    this.player = new Car(this.ctx, this.width, this.height, this.keys);
    this.obstacles = [];
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(function (obs) {
      obs.draw(); // es un array de obstaculos, tiene que recorrerlo y pintar 1 a 1
    });
  },
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateObstacles() { // utilizar framesCounter

  },

  clearObstacles() {},
};
