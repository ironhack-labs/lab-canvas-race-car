class Car {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.img = img;
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

  drawCharacter() {
    this.img.src = "../images/car.png";
    ctx.drawImage(this.img, this.x, this.y, 75, 100);
  }
}

const updateCanvas = () => {
  clearCanvas();

  player.drawCharacter();
};

updateCanvas();
