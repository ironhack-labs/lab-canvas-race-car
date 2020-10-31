"use-strict"


class Car {
    constructor(canvas, lives) {
      this.size = 50;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = 10 + this.size / 2;
      this.y = this.canvas.height / 2;
      this.speed = 5;
      this.direction = 0;
      this.lives = lives;
    }
  
    update() {
      this.x = this.x + this.direction * this.speed;
    }
  
    setDirection(direction) {
      this.direction = direction;
    }
  
    checkScreen() {
      if (this.x - this.size / 2 <= 0) {
        this.direction = 1;
      } else if (this.x + this.size / 2 >= this.canvas.height) {
        this.direction = -1;
      }
    }
  
    checkCollisionEnemy(enemy) {
      const collideRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
      const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
      if (collideRight && collideLeft) {
        return true;
      }
  
      return false;
    }
  
    loseLive() {
      this.lives--;
    }
  }