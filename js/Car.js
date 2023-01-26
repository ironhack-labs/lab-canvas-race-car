class Car {
  constructor(ctx, carWidth, carHeight, positionX, positionY) {
    this.ctx = ctx;
    this.specs = {
      position: {
        x: positionX,
        y: positionY,
      },
      size: {
        h: carHeight,
        w: carWidth,
      },
    };
    this.carInstance = undefined;
    this.createCar();
  }
  drawCar(x, y, w, h) {
    this.ctx.drawImage(this.carInstance, x, y, w, h);
  }
  createCar(...param) {
    this.carInstance = new Image();
    this.carInstance.src = "../images/car.png";
  }
}
