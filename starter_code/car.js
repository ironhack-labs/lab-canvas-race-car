function Car(canvasId, sprite) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
  // debugger
  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.isReady = true;
  this.sprite.scale = 0.3;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.width=this.sprite.width*this.sprite.scale;
    this.height=this.sprite.height*this.sprite.scale;
    // this.sprite.frameIndex = 0;
    // this.sprite.cFrames = 3;
    // this.sprite.rFrames = 1;
    // this.sprite.frameWidth = this.sprite.width / this.sprite.cFrames;
    // this.sprite.frameHeight = this.sprite.height / this.sprite.rFrames;
    // this.width = this.sprite.frameWidth * this.sprite.scale;
    // this.height = this.sprite.frameHeight * this.sprite.scale;
  }).bind(this);

  this.x = 150;
  this.y = 450;

}

Car.prototype.isReady = function() {
  return this.sprite.isReady;
};

Car.prototype.draw = function() {
  if (this.isReady()) {
    this.ctx.drawImage(
      this.sprite,
      0,
      0,
      this.sprite.width,
      this.sprite.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    window.requestAnimationFrame(this.draw.bind(this));
  }
};


var car = new Car("canvasBoard", "./images/car.png");
car.draw();
