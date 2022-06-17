class Score {
  constructor(ctx, score) {
    console.log(score)
    this.ctx = ctx
    this.score = score;
  }

  draw(score) {
    this.ctx.font = "30px Arial";
    this.ctx.fillText( 'Score: '+score, 15, 40);
  }
}