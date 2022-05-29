class Car {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = new Image();
    this.width = 100;
    this.x = (this.canvas.width - this.width) / 2;
    this.y = this.canvas.height - canvas.height - 50;
    this.init();
  }

  init() {
    this.image.src = "images/car.png";
    this.image.addEventListener("load", this.draw);
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if (this.x < 20) return;
    this.x -= 5;
  }

  moveRight() {
    if (this.x > this.canvas.width - this.width - 20) return;
    this.x += 5;
  }
}
