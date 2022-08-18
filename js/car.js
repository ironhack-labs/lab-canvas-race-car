class Car {
  constructor() {
    this.x = 210;
    this.y = 540;
    this.score = 0;
    this.width = 80;
    this.height = 160;
  }

  drawCar() {
    let img = new Image();
    img.src = "../images/car.png";
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    if (this.x < 500 - this.width) this.x += 10;
  }

  moveLeft() {
    if (this.x > 0) this.x -= 10;
  }

  moveDown() {
    if (this.y < 700 - this.height) this.y += 10;
  }

  moveUp() {
    if (this.y > 0) this.y -= 10;
  }

  checkCollision(obstacleX, obstacleY) {
    if (
      this.x < obstacleX + 150 &&
      this.x + this.width > obstacleX &&
      this.y < obstacleY + 25 &&
      this.height + this.y > obstacleY
    ) {
      return true;
    }
  }
}
