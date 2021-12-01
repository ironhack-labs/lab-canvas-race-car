class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.background;
    this.player;
  }

  startGame(ctx) {
    this.background = new Background(ctx);
    this.player = new Player(ctx, 210, 500, 79, 159);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  drawGame() {
    this.clear();
    this.background.draw();
    this.player.draw();
  }

  carMovement(e) {
    switch (e.key) {
      case "ArrowUp":
        this.player.y -= 10;
        this.drawGame();
        break;
      case "ArrowDown":
        this.player.y += 10;
        this.drawGame();
        break;
      case "ArrowLeft":
        this.player.x -= 10;
        this.drawGame();
        break;
      case "ArrowRight":
        this.player.x += 10;
        this.drawGame();
        break;
    }
  }
}
