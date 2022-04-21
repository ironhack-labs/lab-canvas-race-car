class Component {
    constructor(width, height, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
    }

    left() {
        return this.x;
    }
  
    right() {
        return this.x + this.width;
}

newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

