class Score {
  constructor(ctx, score) {
    this.score = score
    this.ctx = ctx;
    this.x = 100
    this.y = 50
  }

  draw() {
    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `Score ${this.score}`,
      this.x,
      this.y
    );
  }
}