"use strict";

class Road {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 0; // at the top
    this.y1 = 0; // at the top
    this.y2 = -canvas.height; // -700;
    this.width = canvas.width;
    this.height = canvas.height;
    this.imgRoadSrc = "../images/road.png";
    this.speed = 10; // add to coord Y --> Y increase from top to bottom
    //this.direction = 0; 
  }

  update (){ // move vertically--> + y coord
    this.y += this.speed; // this.y += 10 --> increase coordY
  }

  draw () { 
    let imgRoad = new Image(); // create image object
    imgRoad.src = this.imgRoadSrc;
      // draw background 1
    this.ctx.drawImage(imgRoad, this.x, this.y1, this.width, this.height);
      // // draw background 2 -- below canvas.height
    this.ctx.drawImage(imgRoad, this.x, this.y2, this.width, this.height);
  }

  checkBoard () { 
    // if passes the bottom of screen
    if (this.y1 >= this.height) this.y = 0;
      //this.direction =  1; // add 1, so the direction is to right
    else imgRoadObj.update(); // inside the board game
      //this.direction = -1; // 
  }
}

export default Road;


