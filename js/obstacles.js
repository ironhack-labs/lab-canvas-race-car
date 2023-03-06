class Obstacle {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.w = 70;
    this.h = 30;
    this.speed = 2;
  }

  move() {
    this.y += this.speed;
  }

  show() {
    fill(110, 206, 213);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}



