const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  background: undefined,
  player: undefined,
  score: undefined,
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
      this.clearObstacles();
      if (this.isCollision()) {
        this.gameOver();
      }
    }, 1000 / this.FPS);
  },
  reset() {
    //create background
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.obstacles = [];
    this.score = 0;
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
  clearObstacles() {
    this.obstacles = this.obstacles.filter((obs) => {
      if (obs.posY > this.height) {
        this.score++;
      }
      return obs.posY <= this.height;
    });
  },

  isCollision() {
    return this.obstacles.some((obs) => {
      return (
        this.player.posY <= obs.posY + 20 &&
        this.width - this.player.posX + this.player.width >
          this.width - obs.posX - obs.width

        //this.player.posX <= obs.posX + obs.width
      );
    });
  },

  gameOver() {
    // .clearInterval
    clearInterval(this.interval);
  },
};
