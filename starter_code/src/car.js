function Car(x, y, minX, maxX) {
  this.posX = x;
  this.posY = y;
  this.width = 50;
  this.maxSpeed = 5;
  this.movX = 0;
  this.img = new Image();
  this.img.src = "images/car.png";
  this.boundaries = {
    min: minX,
    max: maxX - this.width
  }
}

Car.prototype.moveLeft = function() {
  this.movX = -this.maxSpeed;
  this.move();
};

Car.prototype.moveRight = function() {
  this.movX = this.maxSpeed;
  this.move();
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
  ctx.drawImage(this.img, this.posX, this.posY, this.width, 101);
};
