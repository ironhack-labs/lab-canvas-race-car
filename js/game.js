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
  },
  start() {
    this.reset();

    this.interval = setInterval(() => {
      this.framesCounter++;
      if (this.framesCounter > 3000) {
        this.framesCounter = 0;
      }

      this.clear();
      this.drawAll();
      this.generateObstacles();
    }, 1000 / this.FPS);
  },
  reset() {
    //create background
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.obstacles = [];
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach((obs) => {
      obs.draw();
    });
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.heigth);
  },

  generateObstacles() {
    if (this.framesCounter % 100 === 0) {
      this.obstacles.push(new Obstacle(this.ctx, this.width));
    }
  },
};
