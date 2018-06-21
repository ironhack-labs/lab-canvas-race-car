function Car(x, y, minX, maxX) {
  this.posX = x;
  this.posY = y;
  this.maxSpeed = 1;
  this.movX = 0;
  this.img = new Image();
  this.img.src = "images/car.png";
  this.boundaries = {
    min: minX,
    max: maxX - 50
  }
}

Car.prototype.moveLeft = function() {
  this.movX = -this.maxSpeed;
};

Car.prototype.moveRight = function() {
  this.movX = this.maxSpeed;
};

Car.prototype.move = function() {
  this.posX += this.movX;

  if (this.posX < this.boundaries.min) {
    this.posX = this.boundaries.min;
  } else if (this.posX > this.boundaries.max) {
    this.posX = this.boundaries.max;
  }
};

Car.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, this.posX, this.posY, 50, 101);
};
