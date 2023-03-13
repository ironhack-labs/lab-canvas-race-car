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
  score: 0,

  keys: {
    RIGHT: 39,
    LEFT: 37,
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

      this.clear();
      this.drawAll();
      this.generateObstacles();
      this.getScore();
      this.clearObstacles();
      if (this.isCollision()) {
        this.gameOver();
      }
    }, 1000 / this.FPS);
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.drawScore();
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

  isCollision() {
    return this.obstacles.some((obs) => {
      return (
        // this.player.posY <= obs.posY &&
        // this.player.posX + this.player.width >= obs.posX &&
        // this.player.posY <= obs.posX + obs.width
        (this.player.posY - 20 <= obs.posY &&
          this.player.posX + this.player.width >= obs.posX &&
          this.player.posX <= obs.posX + obs.width) ||
        this.player.posX <= 64 ||
        this.player.posX + this.player.width >= 440
      );
    });
  },

  gameOver() {
    clearInterval(this.interval);
    this.overScreen();
  },

  getScore() {
    this.obstacles.forEach (obs => {
      if (obs.posY >= Game.height) {
        this.score++
      }
    })
  },

  drawScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`Score: ${this.score}`, 100, 50);
  },

  overScreen(){
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0,0,Game.width,Game.height)
    this.ctx.fillStyle = "red";
    this.ctx.font = "40px Arial";
    this.ctx.fillText(`Game Over`, 150, 350);
    this.ctx.fillStyle = "white";
    this.ctx.font = "40px Arial";
    this.ctx.fillText(`Score: ${this.score}`, 180, 450);
  }
};
