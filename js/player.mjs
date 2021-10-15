"use strict";

class Player {
    constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.height = 80; // size
    this.width = 50;
    this.x = (this.canvas.width - this.width) / 2; // in the middle
    this.y = this.canvas.height - 30;
    this.speed = 5;
    this.direction = 0; 
    this.left = this.x; //left side of car
    this.right = this.x + this.width; // right side of car
    this.top = this.y; //position of car
    this.bottom = this.y + this.height; //position of car
    
  }

  update(){ // move horizontally --> x coord
    this.x = this.x + this.direction * this.speed;
  }

  draw() {
    let img = new Image(); // create image object
    img.src = '../images/car.png';
    img.onload = () => {
      this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
    }
  }

  setDirection(direction){
    this.direction = direction;
  }

  checkScreen(){ // set the bottom of canvas
    // if passes the middle of the width to the left of screen
    if (this.x - this.width / 2 <= 0){
      this.direction = 1; // add 1, so the direction is to right
    } else if (this.x + this.width / 2 >= this.canvas.width) { // off to the right
      this.direction = -1; // to the left of the board
    }
  }

  checkCollisionObstacle(obstacle) {
    if ( // return true if there is a collision
      this.left < obstacle.right && // left-car with right-obst
      this.right > obstacle.left && // right-car with left-obst
      this.top < obstacle.bottom && // top-car with bottom-obst
      this.bottom > obstacle.top) {
        const bang = new Image();
        bang.scr = '../images/bang.png';
        bang.onload = () => {
          this.ctx.drawImage(bang, this.x, this.y, 50, 50)
        }
        return true; // to see from outside if the collision occurs
    }
    return false;
  }
}

export default Player;