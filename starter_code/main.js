var Car = function(speed){
  this.speed = 10;
  this.x = 210;
  this.y = 412;
  this.points = 0;
  this.img;
  this.imgSrc = 'images/car.png';
  this.canvas;
  this.width = 450;
  this.heigth = 490;
};

Car.prototype.addPoints = function(){
  this.points += 10;
  return this.points;
};

Car.prototype.explode = function(){
  // I know that you want to see this ;)
};

Car.prototype.moveLeft = function(){
  this.x -= 10;
};

Car.prototype.moveRight = function(){
  this.x += 10;
};
