"use strict";


const imgCar =new Image();
imgCar.src = './images/car.png';

class Car {
  constructor(canvas, lives) {
    this.sizeX = 50;
    this.sizeY = 100;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - this.sizeY - 10;
    this.speed = 5;
    this.direction = 0;
    this.lives = lives;
  }

  update() {
    this.x = this.x + this.direction * this.speed;
    this.checkScreen();
  }

  draw() {
    this.ctx.drawImage(imgCar,this.x - this.sizeX / 2, this.y,this.sizeX, this.sizeY);
  }

  setDirection(direction) {
    this.direction = direction;
  }

  checkScreen() {
    if (this.x - this.sizeX / 2 <= 0) {
      this.x = this.sizeX/2;
    } else if (this.x + this.sizeX / 2 >= this.canvas.width) {
      this.x = this.canvas.width -this.sizeX/2;
    }
  }

  checkCollisionObstacles(obstacle) {
    const collideRight = this.x + this.sizeX / 2 > obstacle.x - obstacle.sizeX / 2;
    const collideLeft = this.x - this.sizeX / 2 < obstacle.x + obstacle.sizeX / 2;
    const collideTop = this.y + this.sizeY / 2 > obstacle.y - obstacle.sizeY / 2;
    const collideBottom = this.y - this.sizeY / 2 < obstacle.y + obstacle.sizeY / 2;

    if (collideRight && collideLeft && collideTop && collideBottom) {
      return true;
    }

    return false;
  }

  loseLive() {
    this.lives--;
  }
}
