function NewCar() {
  this.x = 155;
  this.y = 510;
  this.moveLeft = function() {
    if(this.x > 40) this.x -= 10;
  };
  this.moveRight = function() {
    if(this.x < 270) this.x += 10;
  };
}

NewCar.prototype._AddCar = function (canvas) {
  var img = new Image();
  img.src = './images/car.png';
  img.onload = function() {
  canvas.ctx.drawImage(img,this.x,this.y,40,80);
}.bind(this);
};
