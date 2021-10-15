"use strict";

class Obstacle {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.minWidth = 20;
    this.maxWidth = 400;
    this.width = Math.floor(Math.random() * (this.maxWidth - this.minWidth) + this.minWidth);
    this.y = 0; // from top
    this.x = Math.floor(Math.random() * (this.canvas.width - this.width)); //random-> 25 and 450
    this.height = 20; // size
    this.left = this.x; // left side of obstacle
    this.right = this.x + this.width; // rigth side of obstacle
    this.top = this.y; // top of obstacle
    this.bottom = this.y + this.height; //  bottom of obstacle
    this.speed = 5;
    this.direction = 1; // from top to bottom
  }

  update () {
    this.y = this.y + this.direction * this.speed; // from top to bottom
    this.left = this.x; // left side of obstacle
    this.right = this.x + this.width; // rigth side of obstacle
    this.top = this.y; // top of obstacle
    this.bottom = this.y + this.height; 
  }

  draw (){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  setDirection (direction){
    this.direction = direction;
  }


}
 export default Obstacle;
