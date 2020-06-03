class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = Math.random(200) * 300;
    this.y = 0
    this.width = (Math.floor(Math.random() * (0.5 * this.ctx.canvas.width) + 100) - 80);
    this.height = 50
    this.speedY = 3;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = "red";
  }

  move() {
    this.y += this.speedY;
  }

}
