class Obstacles {
  constructor(obstX, obstY) {
    this.width = 200;
    this.height = 50;
    this.color = "red";
    this.obstX = obstX;
    this.obstY = obstY;
    // this.vx = vx;
    this.vy = 3;
  }
  drawObstacles() {
    context.fillStyle = this.color;
    context.fillRect(this.obstX, this.obstY, this.width, this.height);
  }

  setRandomObstacle() {
    this.obstX = Math.floor(Math.random() * 330);
    this.obstY = Math.floor(Math.random() * 550);
    
  }

  updateObstacles() {
    this.obstY += this.vy;
    console.log(this.obstY);
  }
}
