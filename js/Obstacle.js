class Obstacle {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 40;
    this.velocity = -1.5;
  }

  draw() {
    this.ctx.fillStyle = "#4e3b02";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.y >= this.ctx.canvas.height) {
      this.y = 0;
    }
    this.y -= this.velocity;
  }
}
