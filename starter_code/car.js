//Car movements

function Car(canvas, ctx) {
  this.ctx = ctx;
  this.canvas = canvas;
  this.img = new Image();
  this.img.src = "./images/car.png";
  this.x = 100;
  this.y = 100;
  this.width = 100;
  this.height = 100;
}


Car.prototype.draw = function(){
  console.log(this.ctx)
  //this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}


