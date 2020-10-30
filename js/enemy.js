"use strict";

class Enemy {
  constructor(canvas, x){
    //this.width = 50 + 50 * Math.round(Math.random()*2)
    //this.height = 30
    this.width = 60
    this.height = 120
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d")
    this.img = "/images/whitecar.png";
    //this.img1 ="/images/f1.png"
    //this.img2 ="/images/gris.jpg"
    //this.x = x + this.width/2
    this.x = Math.random() * (411 - 30) + 30;
    this.y = 0
    this.speed = 4
    this.direction = 1
  }
  update() {
    this.y = this.y + this.direction * this.speed;
  }
  draw() {
    let whitecarImg = new Image();
    //let f1carImg = new Image();
    //let graycarImg = new Image();
    whitecarImg.src = this.img;
    //f1carImg.src = this.img1;
    //graycarImg.src = this.img2;
    //let arr = [whitecarImg,graycarImg]
    this.ctx.drawImage(whitecarImg, this.x, this.y, this.width, this.height);
    //this.ctx.fillStyle = "red";
    //this.ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
  }
  setDirection(direction){
    this.direction = direction
  }
}