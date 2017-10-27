 function Car(){
  this.x = 148;
  this.y = 90;

};

Car.prototype.moveLeft = function(){
  this.x = this.x - 5;
};

Car.prototype.moveRight = function(){
  this.x +=5;
};

Car.prototype.moveUp = function(){
  this.y = this.y - 5;
};

Car.prototype.moveDown = function(){
  this.y +=5;
};
