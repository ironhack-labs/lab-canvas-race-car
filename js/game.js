class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);

    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
    }, 1000 / 60);
  }

  draw() {
    this.background.draw();
    this.player.draw();
  }

  move() {
    //this.background.move();
    this.player.move();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  handleKeyDown(event) {
    if (!event.repeat) {
      switch (event.code) {
        case "ArrowLeft":
          this.player.speedX = -5;
          break;
        case "ArrowRight":
          this.player.speedX = 5;
          break;
        // case "ArrowUp":
        //   this.player.speedY = -5;
        //   break;
        // case "ArrowDown":
        //   this.player.speedY = 5;
        //   break;
      }
    }
  }

  handleKeyUp(event) {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      this.player.speedX = 0;
    }
    // if (event.code === "ArrowUp" || event.code === "ArrowDown") {
    //   this.player.speedY = 0;
    // }
  }
}
