"use strict"

class Car {
    constructor(canvas, lives) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.width = 50;
        this.height = 75;
        this.x = this.canvas.width/2;
        this.y = this.canvas.height - this.height - 20;
        this.speed = 3;
        this.direction = 0;
        this.points = 0;
    }

    update() {
        this.x = this.x + this.direction * this.speed;
        this.checkScreen();
    }

    draw() {
        const car = new Image();
        car.src = '/images/car.png';
        this.ctx.drawImage(car, this.x - this.width/2, this.y, this.width, this.height)
    }

    setDirection(direction) {
        this.direction = direction;
    }

    checkScreen() {
        if (this.x - this.width / 2 <= 0) {
            this.direction = 1;
        } else if (this.x + this.width / 2 >= this.canvas.width) {
            this.direction = -1;
        }
    }

    checkCollisionObstacles(obstacle) {
        const collideRight = this.x + this.width / 2 > obstacle.x - obstacle.width / 2;
        const collideLeft = this.x - this.width / 2 < obstacle.x + obstacle.width / 2;
        const collideTop = this.y + this.height / 2 > obstacle.y - obstacle.height / 2;
        const collideBottom = this.y - this.height / 2 < obstacle.y + obstacle.height / 2;
        
        if (collideRight && collideLeft && collideTop && collideBottom) {
            return true;
        }
        return false;        
    }

    loseLive() {
        this.lives--;
    }
    
    sumPoints() {
        this.points++;
    }
}
