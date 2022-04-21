class Component {
  constructor() {
    this.x = 225;
    this.y = 580;
    this.width = 50;
    this.height = 100;
    this.componentImage = new Image();
  }
  drawComponent() {
    this.componentImage.src = "../images/car.png";
    ctx.drawImage(this.componentImage, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if (this.x > 70) {
      this.x -= 25;
    }
  }
  moveRight() {
    if (this.x + this.width < 430) {
      this.x += 25;
    }
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

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  bottom() {
    return this.y + this.height;
  }
  top() {
    return this.y;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
