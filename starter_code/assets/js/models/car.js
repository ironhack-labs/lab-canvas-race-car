
function Car(ctx, x, y) {
  this.ctx = ctx;
  this.sprite = "./assets/images/car.png";
  this.y = y || 0;
  this.x = x || 0;
  this.width = 32;
  this.height = 64;
}

  Car.prototype.draw = function (ctx) {
  var img = new Image();
  var x = this.x;
  var y = this.y;
  img.onload = function() {
         ctx.drawImage(img,x,y, img.width / 4, img.height / 4);
      };
      img.src=this.sprite;
  };






