//CAR
let imgCar;

class Car {
  constructor() {
    this.width = 52.6;
    this.height = 106.3;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 10;
    this.speedX = 20;
  }

  drawCar() {
    imgCar = new Image();
    imgCar.src = "../images/car.png";
    ctx.drawImage(imgCar, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += this.speedX;
  }

  moveLeft() {
    this.x -= this.speedX;
  }
}
