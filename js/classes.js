class Car {
  constructor() {
    this.x = 225;
    this.y = 650;
    this.width = 50;
    this.height = 100;
    this.img = new Image();
  }
  draw() {
    this.img.src = "/images.car.png";
    ctx.drawImage(this.x, this.y, this.width, this.height, this.img);
  }

  moveRight() {
    if (this.x + thix.width < cWidth) {
      this.x += 25;
    }
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= 25;
    }
  }
}
