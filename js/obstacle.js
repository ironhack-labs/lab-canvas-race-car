class Obstacle {
  constructor(ctx, posX, posY, width, height) {
    this.ctx = ctx;
    this.obstPos = { x: posX, y: posY };
    this.obstSize = { w: width, h: height };
    this.obstSpeed = 3;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.obstPos.x,
      this.obstPos.y,
      this.obstSize.w,
      this.obstSize.h
    );
    this.move();
  }

  move() {
    this.obstPos.y += this.obstSpeed;
  }
}
