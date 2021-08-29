class Car {
  constructor(ctx, width, height, canvasSize) {
    this.ctx = ctx;
    this.carSize = { w: width, h: height };
    this.canvasSize = canvasSize;

    this.carPositionX = this.canvasSize.w / 2 - this.carSize.w / 2;
    this.carPositionY = this.canvasSize.h - this.carSize.h - 20;

    this.carImage = new Image();
    this.carImage.src = "./images/car.png";
    this.moveLeft = false;
    this.moveRight = false;
  }

  drawCar() {
    this.ctx.drawImage(
      this.carImage,
      this.carPositionX,
      this.carPositionY,
      this.carSize.w,
      this.carSize.h
    );
    this.carMove();
  }

  carMove(){
      this.carPositionX <= this.canvasSize.w - 95 && this.moveRight ? this.carPositionX += 4 : null
    this.carPositionX >= 45 && this.moveLeft ? this.carPositionX -= 4 : null
  }
}
