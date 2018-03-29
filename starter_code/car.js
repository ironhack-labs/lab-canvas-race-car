// 

function Car (canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;

  this.w = 30;
  this.h = 60;

  this.x = this.canvas.width / 2 - this.w;
  this.y = this.canvas.height * 0.75;

  this.img = new Image();
  this.img.src = "images/car.png";

  document.onkeydown = function(event) {
    var d = 10;

    switch(event.keyCode) {
      case 39:
        this.x += d;
        break;
      case 37:
        this.x -= d;
        break;
    }
  
  }.bind(this);
  
}

Car.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x, this.y,40,80);
}