"use strict";

class Car {
    constructor(canvas,score) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.carWidth = 60;
        this.carHeight = 40;
        this.x = (this.canvas.width / 2) -20;
        this.y = 630;
        this.speed = 1;
        this.direction = 0;
        this.score = score;   
    }

    drawCar() {
        const carImg = new Image();
        carImg.src = "./images/car.png";
        this.ctx.drawImage(carImg, this.x, this.y, this.carHeight, this.carWidth);
    }

    update() {
        this.x = this.x + this.direction * this.speed;
    }

    setDirection(direction) {
        this.direction = direction;
    }

    checkScreen() {
        if (this.x - this.carWidth/2 <= 0) {
          this.direction = 1;
        } else if (this.x + this.carWidth/ 2 >= this.canvas.width) {
          this.direction = -1;
        }
    }

    checkCollisionObst(obstacle) {
        const collideRight = this.x + this.carWidth > obstacle.x + obstacle.blockWidth;
        const collideLeft = this.x + this.carWidth < obstacle.x + obstacle.blockWidth;
        const collideTop = this.y + this.carHeight > obstacle.y + obstacle.blockHeight;
        const collideBottom = this.y + this.carHeight < obstacle.y + obstacle.blockHeight;

        if (collideRight && collideLeft && collideTop && collideBottom) {
           return true;
          }
           return false;
    }

    addScore() {
        this.score += 10;
    }
}