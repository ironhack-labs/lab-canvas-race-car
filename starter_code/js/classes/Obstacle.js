class Obstacle {
  constructor(ctx, x, y, speed) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speed = speed
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, ++this.y * this.speed, 200, 20);
    this.ctx.fillStyle = "#990000";
    this.ctx.fill();
    this.ctx.closePath()
  }
}
