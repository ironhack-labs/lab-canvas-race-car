class Obstacle {
  constructor() {
    this.width = 30 * Math.floor(Math.random() * 10);
    this.height = 30;
    this.x = Math.floor(Math.random() * 400);
    this.y = 0;
    this.speed = 2;
    this.color = "#880000";
  }

  update() {
    this.y += this.speed;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
