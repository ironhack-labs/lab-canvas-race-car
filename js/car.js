class Car {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 215;
    this.y = 520;

    this.width = 70;
    this.height = 130;

    this.img = new Image();
    this.img.src = "./images/car.png";
    this.img.isReady = false;
    this.img.onload = () => {
      this.img.isReady = true;
    };
  }

  isReady() {
    return this.img.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  move() {}
}
