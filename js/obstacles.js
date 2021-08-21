class Obstacle {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.obstacleSize = {
      w: Math.random() * 300 + 50,
      h: 20,
    };
    this.obstaclePosition = {
      x: Math.random() * canvasSize.w - 100,
      y: 0,
    };
  }

  draw() {
    this.ctx.fillRect(
      this.obstaclePosition.x,
      this.obstaclePosition.y,
      this.obstacleSize.w,
      this.obstacleSize.h
    );
    this.move();
  }

  move() {
    this.obstaclePosition.y += 3;
  }
}
