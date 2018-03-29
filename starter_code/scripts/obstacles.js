function Obstacles(canvas, ctx){
  this.canvas = canvas;
  this.ctx = ctx;

  this.x = Math.floor((Math.random() * 501));
  this.y = 0;

  this.w = Math.floor(Math.random() * (700 - 400 + 1) + 400);
  this.h = 50;
}

Obstacles.prototype.draw = function(){
  this.ctx.fillStyle = "brown";
  this.ctx.fillRect(this.x, this.y, this.w, this.h);
}

Obstacles.prototype.isCollision = function(car){
  return (
    Math.abs(this.x - car.x) < this.w && 
    Math.abs(this.y - car.y) < this.h
  );
}