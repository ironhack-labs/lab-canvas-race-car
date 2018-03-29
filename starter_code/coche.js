function Coche (canvas, ctx){
  this.canvas = canvas;
  this.ctx = ctx;

  this.src = "images/car.png"

  this.width = 50;
  this.height = 90;

  this.x =  (this.canvas.width/2) - (this.width/2);
  this.y = this.canvas.height - this.height;

  this.img = new Image();
  this.img.src = this.src;
}

Coche.prototype.draw = function(){
  this.ctx.drawImage(this.img, this.x, this.y, this.width,this.height);
}