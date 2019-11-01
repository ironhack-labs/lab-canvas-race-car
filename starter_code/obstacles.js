class Obstacles {
  constructor(game) {
    this.x = randomX();
    this.width = randomWidth();
    this.height = 60;
    this.context = game.context;
    this.player = game.player;
    this.y = -10;
    this.vy = 8;
    this.game = game;
  }

  //   spawn() {
  //     ctx.fillStyle = 'red';
  //     ctx.fillRect(this.x, this.y, this.width, this.height);
  //   }

  updatePosition() {
    if (
      (this.y >= 490 && this.y <= 660) &&
      (this.x < this.player.x && this.player.x < this.x + this.width || this.x < this.player.x + 60 && this.player.x + 60< this.x + this.width)
    ) {
      lose = true;
    } else {
      this.y += this.vy;
    }
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
