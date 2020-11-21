class Car {
  constructor(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = 220;
  this.y = 550;
  this.width = 60
  }


draw(){
let img = new Image()
img.src = "./images/car.png"
this.ctx.drawImage(img,this.x,this.y,this.width,80)
}

moveLeft() {
  if (this.x <=15) {
    this.x = 15
  }
  else {
  this.x -= 5;
  }
}
moveRight() {
  if (this.x >=405) {
    this.x = 405
  }
  else {
  this.x += 5;
  }
}

left() {
  return this.x;
}
right() {
  return this.x + this.width;
}
top() {
  return this.y;
}
bottom() {
  return this.y + 80;
}
crashWith(obst) {
  return !(this.top() > obst.bottom() ||
      this.bottom() < obst.top() ||
      this.left() > obst.right() ||
      this.right() < obst.left())
}
}

