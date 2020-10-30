"use strict";

class Road {
  constructor(canvas){
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d")
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.heigth = 700;
    this.img = "/images/road.png";
  }

  drawRoad(){
    let roadImg = new Image();
    roadImg.src = this.img;
    this.ctx.drawImage(roadImg, this.x, this.y, this.width, this.heigth);
  }
}