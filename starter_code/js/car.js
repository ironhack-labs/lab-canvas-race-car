function Car(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.img = new Image()
  this.img.src = "images/car.png";
  this.x = 500;
  this.y = 550;

  document.onkeydown = function(event) {
    var d = 30;
    
    console.log(event.which);
    switch(event.which) {
      case 39:
        this.x += d;
        break;
      case 37:
        this.x -= d;
        break;
      case 38:
        this.y -= d;
        break;
      case 40:
        this.y += d;
        break;
    }
  }.bind(this)
}
Car.prototype.draw = function() {
  this.ctx.drawImage(this.img,this.x,this.y,80,130);
  //this.ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);  
}