class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = Math.random() * (((this.ctx.canvas.width - 70) - 35) - 70) + 70;
    this.h = 50;
    this.dist = Math.random() * ((this.ctx.canvas.width - this.w -35) + 35 )+ 35;
    this.x = this.dist;
    this.y = 0
    this.color = 'red';
    this.vy = 2;

  }

  move() {
    this.y += this.vy;
  }

  collide(player) {
    const collideX = player.x + player.w > this.x && player.x < this.x + this.w
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y

    return collideX && collideY
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
    this.ctx.closePath();
  }
}