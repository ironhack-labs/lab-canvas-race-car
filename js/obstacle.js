"use strict";

class obstacle {
  constructor(canvas, x) {
    this.sizeY = 30
    this.sizeX = 50 + 50 * Math.floor(Math.random()*3);//generamos 3 tamaños distintos de bloques
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x + this.sizeX/2;
    this.y = this.sizeY/2;
    this.speed = 5;
    this.direction = 1;
  }

  update() {
    this.y = this.y + this.direction * this.speed;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x - this.sizeX / 2, this.y - this.sizeY / 2, this.sizeX, this.sizeY);
  }

  setDirection(direction) {
    this.direction = direction;
  }
}