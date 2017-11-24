function Car(canvas, sprite) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.sprite = new Image();
    this.sprite.src = sprite;

    this.sprite.onload = (function() {
        this.sprite.isReady = true;
      }).bind(this);
}

Car.prototype.draw = function() {
    
    //context.drawImage(img,x,y);
    //context.drawImage(img,x,y,width,height);
    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    if (this.isReady()) {
        this.ctx.save();
        this.ctx.drawImage(this.sprite, 125, 450, 50, 100);
        this.ctx.save();
    }
}

Car.prototype.isReady = function() {
    return this.sprite.isReady;
  }