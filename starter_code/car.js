function Car(img) {
  this.x = 150
  this.nextx = 150
  this.velocity = 5
  this.image = new Image()
  this.image.src = img
  this.image.width = 100
  this.image.height = 180
}


Car.prototype.moveLeft = function() {
  var next = this.x - this.velocity
  if (next >= 0) {
    this.nextx = next
  }
}

Car.prototype.moveRight = function() {
  var next = this.x + this.velocity
  if (next <= 400 - this.image.width) {
    this.nextx = next
  }
}

Car.prototype.move = function() {
  this.x = this.nextx
}

Car.prototype.draw = function(ctx) {
  ctx.drawImage(this.image, this.x, 500, this.image.width, this.image.height);
}
