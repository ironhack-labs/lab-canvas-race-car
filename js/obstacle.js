class Obstacle {
  constructor(ctx, posX, posY, speed, width, height) {
    this.ctx = ctx;
    this.obstPos = { x: posX, y: posY };
    this.obstSize = { w: width, h: height };
  }

  draw() {
    this.obstPos.y += this.obstSpeed;
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.obstPos.x,
      this.obstPos.y,
      this.obstSize.w,
      this.obstSize.h
    );
  }

  move() {
    this.obstPos.y += 3;
  }

  // collidesWith() {
  //   if (
  //     this.obstPos.x < this.car.carPos.x + this.car.carSize.w &&
  //     this.obstPos.x + this.obstSize.w > this.car.carPos.x &&
  //     this.obstPos.y < this.car.carPos.y + this.car.carSize.h &&
  //     this.obstSize.h + this.obstPos.y > this.car.carPos.y
  //   ) {
  //     return true;
  //   }
  // }
}
