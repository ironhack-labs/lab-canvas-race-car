fps = 50;
var RaceCar = function(maxSpeed,x,y){
  this.maxSpeed = maxSpeed;
  this.pos = {X:x,Y:y};
  this.speed = 2;
}

RaceCar.prototype.move = function(direction){
  this.speed = this.maxSpeed * direction;
}
RaceCar.prototype.stop = function(){
  this.speed = 0;
}
RaceCar.prototype.moveCar = function(canvas){
  this.pos.X += this.speed/fps;
  canvas.createCar(this.pos.X,this.pos.Y);
}