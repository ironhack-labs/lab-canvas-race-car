"use strict"

class Coche{
    constructor(canvas, lives) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.car = new Image();
        this.car.src = "./images/car.png";
        this.lives = lives;
        this.speed = 2;
        this.direction = 0;
        this.carSize = {
                width: 158 * 0.25,
                height : 319 * 0.25
            }
        this.carPositionX = this.canvas.width / 2 - this.carSize.width / 2;
        this.carPositionY = this.canvas.height - this.carSize.height - 20;
    }

    update() {
        this.carPositionX = this.carPositionX + this.direction * this.speed;
    }
    
    draw() {
    this.ctx.drawImage(this.car, this.carPositionX, this.canvas.height - this.carSize.height - 20, this.carSize.width, this.carSize.height);
  }

    setDirection(direction) {
        this.direction = direction;
    }

    setSpeed() {
        this.car.speed +=0.25;
    }

    checkLimits() {
        if (this.carPositionX - this.carSize.width / 2 >= 350) {
            this.direction = -1;
        } else if (this.carPositionX + this.carSize.width / 2 <= 110) {
            this.direction = 1;
        }
    }

    checkCollisionObstacle(obstacle) {
        this.carTop = this.carPositionY;
        this.carBottom = this.carPositionY + this.carSize.height;
        this.carLeft = this.carPositionX;
        this.carRight = this.carPositionX + this.carSize.width;
    /*const collideRight = this.carPositionX + this.carSize.width / 2 > obstacle.x + obstacle.obstacleWidth/ 2;
    const collideLeft = this.carPositionX - this.carSize.width / 2 < obstacle.x + obstacle.obstacleWidth / 2;
    const collideBottom = this.carPositionY - this.carPositionY / 2 < obstacle.y + obstacle.obstacleHeight / 2;
        if (obstacle.y > this.carBottom && obstacle.x + obstacle.obstacleWidth < this.carLeft && obstacle.y + obstacle.obstacleHeight < this.carTop && obstacle.x > this.carRight) {
            return true;
             console.log("hola")
            
        }
       
      return false;*/
    }

  loseLive() {
    this.lives--;
  }
}

