class Obstacle {
  constructor(ctx, posX, posY, width) {
    this.ctx = ctx;
    this.obstaclePos = { x: posX, y: posY };
    this.obstacleSize = { w: width, h: 10 };
    this.imageInstance = undefined;
    this.obstacleSpeed = 10;
    this.init();
  }

  init() {}

  move() {
    this.obstaclePos.y += this.obstacleSpeed;
    //this.checkCollision();
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.obstaclePos.x,
      this.obstaclePos.y,
      this.obstacleSize.w,
      this.obstacleSize.h
    );
  }
}
