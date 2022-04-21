class Bg {
  constructor() {
    this.frames = 0;

    this.bgImage = new Image();
    this.width = cWidth;
    this.height = cHeight;
    this.y = 0;
    this.x = 0;
  }

  bg() {
    this.bgImage.src = "/images/road.png";
    ctx.drawImage(this.bgImage, this.x, this.y, this.width, this.height);
  }
}

class Enemies {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  /*   left() {
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
  } */

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Car {
  constructor() {
    this.image = new Image();
    this.width = 100;
    this.height = 150;
    this.y = 540;
    this.x = 195;
  }

  drawCar() {
    this.image.src = "/images/car.png";
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= 25;
    }
  }

  moveRight() {
    if (this.x + this.width < 500) {
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

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
  /*   reset() {
    this.x = 195;
  } */
}
