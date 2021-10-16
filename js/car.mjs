'use strict';


class Car {
    constructor(canvas, lives){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.width = 50;
        this.x = (this.canvas.width - this.width) / 2;
        this.y = 550;
        this.speed = 5;
        this.direction = 0;
        this.height = 140;
        this.lives = lives;
    }

    update(){
        this.x = this.x + this.direction * this.speed;
    }

    draw() {
        const img = new Image();
        img.src = '../images/car.png';
        this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
    }
       
    setDirection(direction){
        this.direction = direction;
    }

    checkScreen(){
      if (this.x <= 0 || this.x + this.width >= this.canvas.width){
        this.direction = 1;
    }
  }
 
    checkCollisionObstacles(obstacle){
      const collideRight = this.x + this.size / 2 > obstacle.x - obstacle.size / 2;
      const collideLeft = this.x - this.size / 2 < obstacle.x + obstacle.size / 2;
      const collideBottom = this.y + this.size / 2 > obstacle.y - obstacle.size / 2;
      const collideTop = this.y - this.size / 2 < obstacle.y + obstacle.size / 2;

      if (collideRight && collideLeft && collideTop && collideBottom) {
      return true;
      }
      return false;
    }

    loseLive() {
      this.lives--;
    }

}

export default Car;