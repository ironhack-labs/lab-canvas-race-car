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
  totalScore: 0,

  keys: {
    RIGHT: 39,
    LEFT: 37,
  },

  init() {
    this.setContext();
    this.setDimensions();
    this.reset();
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

    this.interval = setInterval(() => {
      this.framesCounter++;
      if (this.framesCounter > 3000) {
        this.framesCounter = 0;
      }

      this.clear();
      this.drawAll();
      this.generateObstacles();
      this.getScore();
      this.drawScore();
      this.clearObstacles();
      if (this.isCollision()) {
        this.gameOver();
      }
    }, 1000 / this.FPS);
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.score = new Score (this.ctx, this.width, this.height, this.score)
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    // this.score.draw();
    this.obstacles.forEach(function (obs) {
      obs.draw();
    });
  },

  generateObstacles() {
    if (this.framesCounter % 100 === 0) {
      this.obstacles.push(
        new Obstacle(this.ctx, this.width, this.posX, this.posY)
      );
    }
  },

  clear() {
    // .clearRect(posX, posY, w, h)
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  clearObstacles() {
    // Clear obstacles array (.filter 👀)
    this.obstacles = this.obstacles.filter(function (obs) {
      return obs.posY <= Game.height;
    });
  },

  getScore(){
    if (this.obstacles.some.posY >= this.height) {
      this.totalScore++;
  }},

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillText(`Score: ${this.totalScore}`, 100, 50);
  },

  isCollision() {
    return this.obstacles.some((obs) => {
      return (
        (this.player.posY - 20 <= obs.posY &&
          this.player.posX + this.player.width >= obs.posX &&
          this.player.posX <= obs.posX + obs.width) ||
        this.player.posX <= 44 ||
        this.player.posX + this.player.width >= 474
      );
    });
  },

  gameOver() {
    clearInterval(this.interval);
    this.obstacles=[];
  },
};
