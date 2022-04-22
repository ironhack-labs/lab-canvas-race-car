class Components {
  constructor(width, height, x) {
    this.width = width;
    this.height = height;
    this.x = x;

    this.speedX = 0;

    if (this.x > 0) {
      this.x += 20;
    }
    if (this.x + width < cWidth) {
      this.x -= 20;
    }
  }
}
