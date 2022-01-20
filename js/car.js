class Car {
  constructor(ctx, posX, posY, width, height) {
    this.ctx = ctx;
    this.carPos = { x: posX, y: posY };
    this.carSize = { w: width, h: height };
    this.imageInstance = undefined;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = "images/car.png";
    // this.imageInstance.onload = () => {
    //   this.ctx.drawImage(imageInstance, 100, 100, 200, 200);
    // };
  }
  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.carPos.x,
      this.carPos.y,
      this.carSize.w,
      this.carSize.h
    );
  }
  moveLeft() {
    this.carPos.x -= 10;
  }

  moveRight() {
    this.carPos.x += 10;
  }
  //   collidesWith(element) {
  //     if (
  //       this.carPos.x < obstaclePos.x + obstacleSize.w &&
  //       this.carPos.x + this.carPos.w > obstaclePos.x &&
  //       this.carPos.y < obstaclePos.y + 10 &&
  //       this.carPos.y + this.carPos.h > obstaclePos.y
  //     ) {
  //       return true;
  //     }
  //     return false;
  //   }
}
