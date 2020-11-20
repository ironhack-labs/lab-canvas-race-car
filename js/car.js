class Car {
  constructor(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = 220;
  this.y = 550;
  }


draw(){
let img = new Image()
img.src = "./images/car.png"
this.ctx.drawImage(img,this.x,this.y,60,80)
}

moveLeft() {
  this.x -= 5;
}
moveRight() {
  this.x += 5;
}

}

