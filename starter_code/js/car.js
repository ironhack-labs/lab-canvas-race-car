
  var car = new Car(
    "canvas",
    "https://s3-eu-west-1.amazonaws.com/cpm-assets/mario-sprite.png"
  );
  
Car.prototype.draw = function() {
  //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  this.ctx.drawImage(
    this.img,
    this.frameIndex * (this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
    this.img.height,
    0,
    0,
    this.canvas.width,
    this.canvas.height
  );