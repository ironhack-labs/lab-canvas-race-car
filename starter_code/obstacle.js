class Obstacle {
  constructor(y) {
    this.x;
    this.y = y;
    this.width;
    this.height = 30;

    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.random() * 200;
    this.width = 70 + Math.random() * 100;
  }
  paint() {
    ctx.fillStyle = 'orange';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  move() {
    this.y += 1.5 ** 2;
  }
  checkCollision() {
    const carX = car1.carX;
    const carY = car1.carY;
    const carWidth = 100;
    const carHeight = 150;

    const obstacleX = this.x;
    const obstacleY = this.y;
    const obstacleWidth = this.width;
    const obstacleHeight = this.height;

    if (
      carX + carWidth > obstacleX &&
      carX < obstacleX + obstacleWidth &&
      carY + carHeight > obstacleY &&
      carY < obstacleY + obstacleHeight
    ) {
      gameIsRunning = false;
    }
  }
}
let loadObst = [];
for (let i = 0; i < 100; i++) {
  let obst = new Obstacle(i * -500 + Math.random() * -100);
  loadObst.push(obst);
}
