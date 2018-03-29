var RIGHT_KEY = 39;
var TOP_KEY = 38;
var BOTTOM_KEY = 40;
var LEFT_KEY = 37;

function Car(canvas, ctx, imagePath) {
  this.canvas = canvas;
  this.ctx = ctx;

  this.image = new Image();
  this.image.src = imagePath;

  this.w = 50;
  this.h = 90;

  this.x = (this.canvas.width / 2) - (this.w / 2);
  this.y = this.canvas.height * 0.75;

  document.onkeydown = function (event) {
    
    var i = 10;

    switch (event.keyCode) {
      case TOP_KEY:
        this.y -= i;
        break;
      case RIGHT_KEY:
        this.x += i;
        break;
      case BOTTOM_KEY:
        this.y += i;
        break;
      case LEFT_KEY:
        this.x -= i;
        break;
    }
  }.bind(this)
}



Car.prototype.draw = function () {
  /* this.ctx.fillStyle = "#FF0000";
  this.ctx.fillRect(this.x, this.y, this.w, this.h); */

  //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

  this.ctx.drawImage(
    this.image,
    0,
    0,
    this.image.width,
    this.image.height,
    this.x,
    this.y,
    this.w,
    this.h
  )
}