class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    context.fillStyle = "orange";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
