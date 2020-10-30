"use strict";

class Obstacle {
    constructor(canvas, x) {
        this.blockWidth = 20 * Math.floor((Math.random() * 5)); // needs to be random
        this.blockHeight = 20; // always same height
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.y = this.blockHeight/ 2;
        this.x = x + this.blockWidth/ 2;
        this.speed = 5;
        this.direction = 1;
    }

    update() {
        this.y = this.y + this.direction * this.speed;
    }

    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.blockWidth, this.blockHeight);
    }

    setDirection(direction) {
        this.direction = direction;
    }

}