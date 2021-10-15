'use strict';

class Car {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = 250;
    this.y = 650;
    this.width = 70;
    this.height = 140;
    this.speed = 15;
    this.lives = lives;
  }
  draw() {
    const img = new Image();
    img.src = '../images/car.png';
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }
  // moves right till the edge of the road
  // moves backward only to moveLeft()
  moveRight() {
    if (this.speed === 0 && this.x + this.width < this.canvas.width) {
      this.speed = 10;
    }
    this.x = this.x + this.speed;
    this.checkRoadEdges();
  }
  // moves left till the edge of the road
  // moves backward only to moveRight()
  moveLeft() {
    if (this.speed === 0 && this.x > 0) {
      this.speed = 10;
    }
    this.x = this.x - this.speed;
    this.checkRoadEdges();
  }
  // check if the car reached the edge of the road
  // if yes, then stops the car
  checkRoadEdges() {
    if (this.x <= 0 || this.x + this.width >= this.canvas.width) {
      this.speed = 0;
    }
  }
  checkCollisionObstacle(obstacle) {
    const collideRight =
      this.x + this.width > obstacle.x &&
      this.y <= obstacle.y &&
      obstacle.x !== 0;
    const collideLeft =
      this.x < obstacle.width && this.y <= obstacle.y && obstacle.x === 0;

    if (collideRight || collideLeft) {
      return true;
    }
    return false;
  }

  loseLive() {
    this.lives--;
  }
}

export default Car;
