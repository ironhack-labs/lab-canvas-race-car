class Road {
  constructor(src, x, y) {
    this.x = x;
    this.y = y;

    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
    });

    img.src = src;
  }
  drawRoad() {
    ctx.drawImage(this.img, this.x, this.y);
  }
}

class Car extends Road {
  constructor(src, x, y, width, height) {
    super(src, x, y);
    this.width = width;
    this.height = height;
  }
  drawCar() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
