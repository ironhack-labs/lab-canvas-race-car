function Car(x, y) {
    this.width = 25;
    this.height = this.width * 2;
    this.x = x ? x : canvas.width / 2 - this.width / 2;
    this.y = y ? y : canvas.height - this.height - 20;
    this.points = 0;
}

Car.prototype.setCarImage = function() {
  img = new Image();
  img.src = '../images/car.png';
  img.onload = function() {
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }.bind(this);
};

Car.prototype.update = function() {
  console.log('car update');
  if(key.isDown(key.left)) {
    console.log('car moves left');
    this.x -= this.x < 36 ? 0 : 6;
    console.log(this.x);
  }
  if(key.isDown(key.right)) {
    console.log('car moves right');
    this.x += this.x > 244 ? 0 : 6;
    console.log(this.x);
  }
};
