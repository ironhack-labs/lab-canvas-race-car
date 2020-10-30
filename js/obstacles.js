"use strict";

class Obstacle {
  constructor(canvas) {
    this.size = 200;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.y = 0;
    this.speed = 20;
    this.direction = -1;
    this.width = ((Math.random()*100)*300)/100
    
    this.x = 60 ;

    this.position()

  }

  position(){
      if(Math.random()>0.5){
          this.x = 500 - this.width -60;
      }
  }

  update() {
    this.y = this.y + this.speed;
  }

  draw() {
    this.ctx.beginPath();
    
    this.ctx.fillRect(  this.x, this.y , this.width , 50);
    this.ctx.fillStyle = "purple";
    this.ctx.stroke();
    

  }

 
}
