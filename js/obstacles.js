class Obstacle {
  constructor(ctx, x, y, width, vy) {
    this.cxt = ctx;
    this.x = x;
    thix.y = y;
    this.width = width;

    this.vy = vy;

    this.height = 20;
    this.color = "red";
  }

  draw() {
    this.ctx.save();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.restore();
  }

  move() {
    this.y += this.vy;
  }
}
