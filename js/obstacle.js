"use strict";

class Obstacle {
  constructor(canvas, x) {
    this.obsctacleHeight = 20;
    this.obstacleWidth = (Math.random()*50) + 5;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.y = 0;
    this.x = x;
    this.speed = 2;
  }

  update() {
    this.y = this.y + this.speed;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.obstacleWidth, this.obsctacleHeight);
  }
}
