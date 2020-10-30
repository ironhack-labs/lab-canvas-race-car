"use strict";

class Car {
  constructor(canvas, lives){
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d")
    this.x = this.canvas.width/2;
    this.y = 550;
    this.width = 60;
    this.height = 120;
    this.img = "/images/car.png";
    this.direction = 0;
    this.speed = 3;
    this.lives = lives
  }
  update(){
    this.x = this.x + this.direction * this.speed
    this.checkScreen()
  }
  draw(){
    let carImg = new Image();
    carImg.src = this.img;
    this.ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
  }
  setDirection(direction){//Mover el coche 
    this.direction = direction
  }
  checkScreen(){//choca con los bordes (hay que definir los bordes)
    if (this.x - this.width/2 <= 0){
      this.x = this.width/2;
    } else if (this.x + (this.width + this.width/2) >= this.canvas.width){
      this.x = this.canvas.width - (this.width * 1.5);
    }
  }
  checkCollisionEnemy(enemy) {
    const collideRight = this.x + this.width / 2 > enemy.x - enemy.width / 2;
    const collideLeft = this.x - this.width / 2 < enemy.x + enemy.width / 2;
    const collideTop = this.y + this.height / 2 > enemy.y - enemy.height / 2;
    const collideBottom = this.y - this.height / 2 < enemy.y + enemy.height / 2;
    if (collideRight && collideLeft && collideTop && collideBottom) {
      return true;
      //console.log("hay colision")
    } else {
      return false;
      //console.log("no hay colision")
    }
  }
  loseLive(){
    this.lives--
  }
}