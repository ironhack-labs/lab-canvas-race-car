class Player {
  // CAR
  constructor(ctx, x, y, w, h) {
    this.ctx = ctx;
    this.x = 210;
    this.y = 520;
    this.width = w;
    this.height = h;
    this.img = new Image();
    this.img.src = "../images/car.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
