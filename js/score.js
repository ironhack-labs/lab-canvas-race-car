class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 70;
    this.y = 35;

    this.secCount = 0;
    this.score = 0;
  }

  draw() {
    this.secCount++;
    this.score = Math.floor(this.secCount / 10);
    this.ctx.save();
    this.ctx.font = "28px Arial";
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText(`Score: ${this.score}`, this.x, this.y);
    this.ctx.restore();
  }
}
