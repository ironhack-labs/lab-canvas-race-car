
var carRoute = './images/car.png';
var carRatio = 158/310;

function Car(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.maxX = 330;
  this.minX = 40;
  this.image.src = carRoute;
}

Car.prototype.moveRight = function (){if(this.x<this.maxX) this.x+=10;};
Car.prototype.moveLeft = function(){if(this.x>this.minX) this.x-=10;};
Car.prototype.draw = function(context){ context.drawImage(this.image, this.x, this.y, 150*carRatio, 150);};
