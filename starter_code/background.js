class Background {
  constructor(game) {
    this.game = game;
    this.ctx = game.ctx;
    this.width = game.width;
    this.heigth = game.heigth;
  }

  drawBackground() {
    this.ctx.clearRect(0, 0, 500, 700);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 50, 700);
    this.ctx.fillRect(450, 0, 50, 700);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(50, 0, 10, 700);
    this.ctx.fillRect(440, 0, 10, 700);
    for (let i = -1500; i <= 700; i += 90) {
      this.ctx.fillRect(245, i + y, 10, 40);
      if (y === 800) {
        y = 0;
      }
    }
  }
}
