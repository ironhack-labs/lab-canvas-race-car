
function Car() {
  this.x = 270;
  this.y = 450;
  this.width = 60;
  this.height = 80;
};

Car.prototype.moveLeft = function(){
  this.x -=10;
};

Car.prototype.moveRigth = function(){
  this.x += 10;
};
