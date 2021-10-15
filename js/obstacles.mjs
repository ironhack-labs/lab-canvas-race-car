"use strict";

class Obstacles {
    constructor (canvas){
        this.size = 20; // height--> 20 px
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.minWidth = 20;
        this.maxWidth = canvas.width * .9; // 500 * 0.9 = 450;
        this.x = Math.floor(Math.random()*(this.maxWidth - this.minWidth) + this.minWidth); //random-> 20 and 450
        this.y = 0; // from top
        this.width = this.x;
        this.height = 20; // size
        this.speed = 5;
        this.direction = 1; // from top to bottom
        this.obstacle.left = this.x; // left side of obstacle
        this.obstacle.right = this.x + this.width; // rigth side of obstacle
        this.obstacle.top = this.y; // top of obstacle
        this.obstacle.bottom = this.y + this.height; //  bottom of obstacle
    }
    update(){
        this.y = this.y + this.direction * this.speed;
    }
    draw(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    setDirection(direction){
        this.direction = direction;
    }
}
 export default Obstacles;
