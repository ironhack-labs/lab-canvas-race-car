class Component {
  constructor(width, height, color, x, y) {
    this.x = x;
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.roadImg = new Image();
    this.roadImg.src = "/images/road.png";
    this.carImg = new Image();
    this.carImg.src = "/images/car.png";
  }
  moveRight() {
    if (this.x + 10 < 420) {
      this.x += 10;
    }
  }
  moveLeft() {
    if (this.x - 10 > 35) {
      this.x -= 10;
    }
  }
  crashWith(obstacle) {
    if (obstacle.y > 530 && obstacle.y < 630) {
      return !(
        this.x < obstacle.x - 45 || this.x > obstacle.x + obstacle.width
      );
    }
  }
  update() {
    this.ctx.drawImage(this.roadImg, 0, 0, 500, 700);
    this.ctx.drawImage(this.carImg, this.x, 550, 50, 100);
  }
  updateObs() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
