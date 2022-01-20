class Obstacles {
  constructor(ctx, speed, gameSize) {
    this.ctx = ctx;
    this.obstaclesPos = {
      x: Math.floor(Math.random() * (300 - 10)) + 50,
      y: 0,
    };
    this.obstaclesSize = {
      w: Math.floor(Math.random() * (300 - 50)) + 50,
      h: 45,
    };
    this.obstaclesSpeed = speed;
    this.gameSize = gameSize;
    this.fillStyle = "brown";
  }

  move() {
    this.obstaclesPos.y += 5;
    // this.checkCollision();
  }
  draw() {
    this.ctx.fillRect(
      this.obstaclesPos.x,
      this.obstaclesPos.y,
      this.obstaclesSize.w,
      (this.obstaclesSize.y = 45)
    );
  }
}
