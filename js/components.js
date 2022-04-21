class Component {
  constructor() {
    this.x = 224;
    this.y = 590;
    this.width = 50;
    this.height = 100;
    this.img = new Image();
    this.img.src = "images/car.png";
  }

  moveLeft() {
    if (this.x > 10) {
      this.x -= 15;
    }
  }

  moveRight() {
    if (this.x + this.width < 490) {
      this.x += 15;
    }
  }

  drawCar() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }

  update() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
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

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
