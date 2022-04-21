class Car {
  constructor() {
    this.x = cWidth / 2 - 50;
    this.y = cHeight - 150;
    this.width = 100;
    this.height = 150;
    this.img = new Image();
  }

  drawCar() {
    this.img.src = "/images/car.png";
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
