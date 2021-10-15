"use strict";

class Player {
    constructor (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 50;
    this.x = (this.canvas.width - this.width) / 2; // in the middle
    this.y = this.canvas.height - 100;
    this.height = 100; // size
    this.imgCar = "../images/car.png";
    this.left = this.x; //left side of car
    this.right = this.x + this.width; // right side of car
    this.top = this.y; //position of car
    this.bottom = this.y + this.height; //position of car
    this.speed = 1;
    this.direction = 0; 
    this.lives = 3; // lives for the player]
    this.score = 0;
  }

  update (){ // move horizontally --> x coord
    this.x = this.x + this.direction * this.speed;
  }

  draw () {
    let img = new Image(); // create image object
    img.src = this.imgCar;
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
  }

  setDirection (direction){
    this.direction = direction;
  }

  checkScreen () { // set the bottom of canvas
    // if passes the middle of the width to the left of screen
    if (this.x - this.width / 2 <= 0){
      this.direction = 1; // add 1, so the direction is to right
    } else if (this.x + this.width / 2 >= this.canvas.width) { // off to the right
      this.direction = -1; // to the left of the board
    }
  }

  checkCollisionObstacle (obstacle) {
    console.log(`obstacle: ${obstacle.top} ${obstacle.bottom} ${obstacle.left} ${obstacle.right}`)
    console.log(`player: ${this.top} ${this.bottom} ${this.left} ${this.right}`)    // player: top 600 bottom 700 left 225 right 275
    
    const collision = 
      ( // horizontall
        (this.right > obstacle.left && this.right < obstacle.right) ||
        (this.left < obstacle.right && this.left > obstacle.left)
      ) &&
      ( // vertical
        (this.top < obstacle.bottom && this.top > obstacle.top) ||
        (this.bottom > obstacle.top && this.bottom < obstacle.bottom)
      )
    if (collision)
    return collision //collision
  }

  loseLive() {
    this.lives--;
  }

  increaseScore () {
    this.score += 1;
  }
}

export default Player;