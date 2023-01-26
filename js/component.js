class Component {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = "red";
    this.ctx = ctx;
    this.speedX = 0;
  }
  draw() {
    const carImage = new Image();
    carImage.src = "/images/car.png";
    ctx.drawImage(carImage, this.x, this.y, this.w, this.h);
  }
  newPos() {
    this.x += this.speedX;
  }
  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  crashWith(enemy) {
    return !(
      this.bottom() < enemy.top() ||
      this.top() > enemy.bottom() ||
      this.right() < enemy.left() ||
      this.left() > enemy.right()
    );
  }
}

class Enemy {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = "red";
    this.ctx = ctx;
    this.speedY = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  newPosition() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
}
