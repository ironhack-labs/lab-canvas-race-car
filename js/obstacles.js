class Obstacle {
  constructor() {
    this.x = Math.floor(Math.random() * 300);
    this.y = 0;
    this.height = 25;
    this.width = 150;
  }

  drawObstacle() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
    ctx.closePath();
  }

  moveDown() {
    this.y += 4;
  }

  checkIfOut() {
    if (this.y > 700) return true;
  }
}
