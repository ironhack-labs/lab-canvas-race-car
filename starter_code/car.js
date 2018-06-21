function Car(img) {
  this.x = 150
  this.nextx = 150
  this.velocity = 5
  this.image = new Image()
  this.image.src = img
}


Car.prototype.moveLeft = function() {this.nextx = this.x - this.velocity}
Car.prototype.moveRight = function() {this.nextx = this.x + this.velocity}
Car.prototype.move = function() {this.x = this.nextx}
Car.prototype.draw = function(ctx) {
  ctx.drawImage(this.image, this.x, 500, 100, 180);
}
