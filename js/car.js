class Car {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvasDimension = {
      w: 500,
      h: 700,
    };
    this.dimension = {
      w: 75,
      h: 150,
    };
    this.pos = {
      x: this.canvasDimension.w / 2 - this.dimension.w / 2,
      y: 500,
    };
    this.keys = {
      left: 37,
      right: 39,
    };
    this.velocity = 10;
    this.init();
  }
  init() {
    this.createCar();
    this.listen();
  }
  createCar() {
    this.car = new Image();
    this.car.src = "images/car.png";
  }
  drawCar() {
    this.ctx.drawImage(
      this.car,
      this.pos.x,
      this.pos.y,
      this.dimension.w,
      this.dimension.h
    );
  }
  listen() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === this.keys.left) {
        if (this.pos.x <= 62.5) {
          gameOver = true
        }
        this.pos.x -= this.velocity;
      }
      if (e.keyCode === this.keys.right) {
        if (this.pos.x + this.dimension.w >= 437.5) {
          gameOver = true
        }
        this.pos.x += this.velocity;
      }
    });
  }
}