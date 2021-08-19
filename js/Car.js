class Car {
  constructor(carWidth, carHeight, x, y, speed) {
    this.carWidth = carWidth;
    this.carHeight = carHeight;
    this.x = x;
    this.y = y;
    this.speed = speed;

    const carImg = new Image();
    carImg.src = "../images/car.png";
    this.carImg = carImg;
  }

  moveLeft(borderLeft) {
    if (this.x > borderLeft) this.x -= this.speed;
  }

  moveRight(borderRight) {
    if (this.x < borderRight) this.x += this.speed;
  }

  draw() {
    carContext.drawImage(
      this.carImg,
      (carCanvas.width + this.x - this.carWidth) / 2,
      carCanvas.height + this.y - this.carHeight - 20,
      this.carWidth,
      this.carHeight
    );
  }

  update() {
    carContext.clearRect(0, 0, carCanvas.width, carCanvas.height);
    this.draw();
  }
}
