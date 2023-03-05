class Obstacle {
  constructor(x, y) {
    this.x = Math.floor(Math.random() * (innerWidth - 250) + 100);
    this.y = 0;
    this.w = 80;
    this.h = 40;
  }
  draw() {
    rect(this.x, this.y, this.w, this.h);
    let arrObstacles = [];
    arrObstacles.push({ x: this.x, y: this.y, w: this.w, h: this.h });
    this.y += 5;
    if (this.y >= window.innerHeight) {
      arrObstacles.pop();
    }
  }
}
