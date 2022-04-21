class Component {
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

  reset() {
    this.x = 195;
  }
}
