class Obstacle {
  constructor(ctx, width, height, canvasSize, position, speed) {
    (this.ctx = ctx), (this.obstacleSize = { w: width, h: height });
    this.canvasSize = canvasSize;
    (this.obstaclePosition = { x: position, y: -100 }), (this.speed = speed);
    (this.img = new Image()), (this.img.src = "./images/valla.png");
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.obstaclePosition.x,
      this.obstaclePosition.y,
      this.obstacleSize.w,
      this.obstacleSize.h
    );

    this.move();
  }

  move() {
    this.obstaclePosition.y += this.speed;
  }
}
