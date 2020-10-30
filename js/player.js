"use-strict";

class Player {
    constructor(canvas,lives){
    this.size = 80;
    //this.size.src= "/images/car.png"
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = 500;
    this.speed = 5;
    this.direction = 0;
    this.lives = lives;
    }

 update(){
     this.x = this.x + this.direction * this.speed;
 }

 draw(){
  let img = new Image()
  img.src = "/images/car.png"
  this.ctx.drawImage(img,this.x,this.y,this.size,this.size)
  //console.log("drawPlayer")
 }

 setDirection(direction){
     this.direction = direction;
 }

 checkScreen(){
  if(this.x - this.width/ 2 <= 0){
      this.x = this.width/2;
  } else if (this.x + (this.width + this.width/2) >= this.canvas.width){
      this.x = this.canvas.width - (this.width * 1.5)
  }
 }

 checkCollisionEnemy(enemy) {
    const collideRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
    const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
    const collideTop = this.y + this.size / 2 > enemy.y - enemy.size / 2;
    const collideBottom = this.y - this.size / 2 < enemy.y + enemy.size / 2;

    if (collideRight && collideLeft && collideTop && collideBottom) {
      return true;
    }

    return false;
}

loseLive() {
    this.lives--;
  }

}