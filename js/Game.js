class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.background;
    this.player;
    this.obstacles = [];
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
    this.addObstacle();
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach((obstacle) => {
      obstacle.drawRect();
    });
    // check collisions
  }

  carMovement(e) {
    switch (e.key) {
      case "ArrowUp":
      case "w":
        this.player.y -= 10;
        this.drawGame();
        break;
      case "ArrowDown":
      case "s":
        this.player.y += 10;
        this.drawGame();
        break;
      case "ArrowLeft":
      case "a":
        this.player.x -= 10;
        this.drawGame();
        break;
      case "ArrowRight":
      case "d":
        this.player.x += 10;
        this.drawGame();
        break;
    }
  }

  addObstacle() {
    const max = this.ctx.canvas.width - 200;
    const x = Math.floor(Math.random() * max);

    if (this.obstacles.length <= 2) {
      this.obstacles.push(new Obstacle(this.ctx, 100, 100));
    }
  }
}
