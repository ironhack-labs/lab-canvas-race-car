function Car(x, y) {
    this.width = 25;
    this.height = this.width * 2;
    this.x = x ? x : canvas.width / 2 - this.width / 2;
    this.y = y ? y : canvas.height - this.height - 20;
}

Car.prototype.render = function() {
  var img = new Image();
  img.src = '../images/car.png';
  img.onload = function() {
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }.bind(this);
};
