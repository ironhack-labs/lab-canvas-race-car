class TextScore {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this._score = 0;

    this.ctx.font = "48px serif";
  }

  draw() {
    this.ctx.fillText(`Score: ${this._score}`, 10, 50);
  }

  addScore() {
      this._score++;
  }
}
