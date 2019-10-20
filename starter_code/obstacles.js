class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width / 2 + Math.floor((Math.random() - 0.5) * 50)
    this.h = 50;
    this.x = 0
    this.y = 0;
    this.vy = 5;

    if (Math.random() > 0.5) {
      this.x = 0.1 * this.ctx.canvas.width
    } else {
      this.x = 0.9 * this.ctx.canvas.width -this.w
    }
  
  }

  move() {
    this.y += this.vy;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  collide(el) {
    const colX = el.x + el.w > this.x && el.x < this.x + this.w;
    const colY = el.y + el.h > this.y && el.y < this.y + this.h;

    return colX && colY;
  }
}
