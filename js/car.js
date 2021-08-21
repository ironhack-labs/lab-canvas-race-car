class Car {
  constructor(ctx, canvasSize, w, h) {
    (this.ctx = ctx),
      (this.canvasSize = canvasSize),
      (this.carSize = {
        w: w,
        h: h,
      }),
      (this.carPosition = {
        x: this.canvasSize.w / 2 - this.carSize.w / 2,
        y: this.canvasSize.h - this.carSize.h - 100,
      }),
      (this.moveRight = false);
    this.moveLeft = false;
    (this.car = new Image()), (this.car.src = "../images/car.png");
  }

  carDraw() {
    this.ctx.drawImage(
      this.car,
      this.carPosition.x,
      this.carPosition.y,
      this.carSize.w,
      this.carSize.h
    );
  }

  move() {
    this.carPosition.x <= this.canvasSize.w - 130 && this.moveRight
      ? (this.carPosition.x += 4)
      : null;
    this.carPosition.x >= 30 && this.moveLeft
      ? (this.carPosition.x += 4)
      : null;
  }
}
