class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = 0;
    this.width = 100;
    this.height = 150;
    this.color = "red";
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  drawObst() {
    const ctx = myGame.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
  }
  updateObstacle() {
    if (myGame.frames % 100 === 0) {
   let x = myGame.canvas.width
      let posX = Math.floor(Math.random() * myGame.canvas.width - 100);
      if (posX < 0) {
        posX = 0;
      } else if (posX >= myGame.canvas.width) {
        posX = myGame.canvas.width - 150;
      }
      myGame.obstacles.push(
        new Obstacle(posX, 0)
      );
    }
    for (obstacle of myGame.obstacles) {
      obstacle.y -= myGame.speed;
      obstacle.drawObst();
    }
  }
}
let obstacle = new Obstacle();
