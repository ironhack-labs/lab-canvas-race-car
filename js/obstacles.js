class obstacle {
  constructor(ctx, posX, posY, width) {
    this.ctx = ctx;
    this.obstaclePos = { x: 0, y: Math.random(posY) };
    this.obstacleSize = { w: width, h: width * 1.3 };
    this.imageInstance = undefined;

    this.init();
  }

  init()

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.obstaclePos.x,
      this.obstaclePos.y,
      this.obstacleSize.w,
      this.obstacleSize.h
    );
  }
}