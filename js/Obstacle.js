class Obstacle {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
    this.velocity = -2;
  }

  drawRect() {
    console.log("drawing");
    this.ctx.save();
    // this.ctx.fillStyle = "red";
    this.ctx.rect(10, 20, 150, 100);
    this.ctx.fill();
    this.ctx.restore();
    console.log("drawn");
  }

  move() {
    this.x += this.velocity;
  }
}
