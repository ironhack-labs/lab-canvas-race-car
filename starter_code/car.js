var Car = function() {
  this.x = 225,
  this.y = 500;

  document.addEventListener('keydown', this.onKeyDown.bind(this));
};

Car.prototype.moveLeft = function() {
  if(this.x > 40){
    this.x -= 25;
  }
};

Car.prototype.moveRight = function() {
  if(this.x < 420){
    this.x += 25;
  }
};

Car.prototype.onKeyDown = function(e) {
  switch (e.keyCode) {
    case 37:
      this.moveLeft();
      break;
    case 39:
      this.moveRight();
      break;
    default:
      break;
  }
};
