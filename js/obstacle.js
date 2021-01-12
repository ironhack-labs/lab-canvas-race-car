class Obstacle {
  constructor(ctx, width, x) {
    this.ctx = ctx;
    this.x = x;
    this.y = 0;
    this.vy = 3;
    this.width = width;
    this.height = 60;
  }

  draw() {
    this.ctx.save();
    this.ctx.fillStyle = '#870007';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.restore();
  }

  move() {
    this.y += this.vy;
  }

  createObst() {
    let min = this.ctx.canvas.width - 150;
    let space = Math.floor(Math.random() * min);
    this.width = this.ctx.canvas.width - space;
    return this.width;
  }
}