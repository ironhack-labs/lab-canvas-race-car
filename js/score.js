class Score {
  constructor(ctx, scoreW, scoreH, score) {
    this.ctx = ctx;
    this.width = scoreW;
    this.height = scoreH;
    this.score = score;

    this.score = 0;
    this.width = 100;
    this.height = 50;
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "black";
  }
  getScore() {
    // if (Obstacles.some.posY >= Player.posY + Player.height) {
    //   this.score++;
    if (Game.obstacles.some.posY >= 15) {
      this.score++;
    }
  }

  draw() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillText(`Score: ${this.score}`, 8, 20);
  }
}
