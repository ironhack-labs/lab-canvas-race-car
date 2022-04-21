class Components {
  constructor(x, y) {
    this.width = 40;
    this.height = 80;
    this.x = x;
    this.y = y;
    this.imgCar = new Image();
  }
  drawCar() {
    this.imgCar.src = "../images/car.png";
    ctx.drawImage(this.imgCar, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= 25;
    }
  }

  moveRight() {
    if (this.x + this.width < cWidth) this.x += 25;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}

class Obstacles {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  top() {
    return this.y;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  bottom() {
    return this.y + this.height;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
