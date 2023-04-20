class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null;
    this.frames = 0;

  //Road Image
    const background = new Image();
    background.addEventListener("load", () => {
      this.background = background;
    });
    background.src = "images/road.png";
  }

  drawBackground() {
    ctx.drawImage(this.background, 0, 0, this.width, this.height);
  }

  start() {
    this.intervalId = setInterval(this.update, 10);
  }

  update = () => {
    this.frames++;
    this.clear();
    this.drawBackground();
    this.player.moveLimiter();
    this.player.draw();
  };

  stop() {
    clearInterval(this.intervalId);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height); 
  }
}
