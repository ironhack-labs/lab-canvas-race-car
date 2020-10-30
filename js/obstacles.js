"use strict"

class Obstacles {
    constructor(canvas, x) {
        this.width = 70;
        this.height = 75;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = this.height/2;
        this.speed = 5;
        this.direction = 1;
    }

    update() {
        this.y = this.y + this.direction * this.speed;
    }

    draw() {
        const obstacleImage = new Image();
        obstacleImage.src = '/images/truck.png'
        this.ctx.drawImage(obstacleImage, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }

    setDirection() {
        this.direction = direction;
    }
}