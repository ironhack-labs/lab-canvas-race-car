function Car() {
this.sprite = "./images/car.png";
this.x = 500/2-158/2;
this.y = 300;
}
Car.prototype.draw = function (ctx) {
var img = new Image();
var x = this.x;
var y = this.y;
img.onload = function() {
       ctx.drawImage(img,x,y, img.width, img.height);
    };
    img.src=this.sprite;
};
