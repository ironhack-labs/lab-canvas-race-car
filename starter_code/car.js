function CreateCarObject(ctx) {
    this.x = 220;
    this.speed = 10;
}

CreateCarObject.prototype.move = function(lado){
     this.speed = this.speed * lado;
  }

CreateCarObject.prototype.render = function(delta,ctx){
    this.x += this.speed/1000*delta;
    var img = new Image();
    imgScale = 158 / 319;
      ctx.drawImage(img, this.x, 650, 90 * imgScale, 90);
    img.src = "images/car.png" }

