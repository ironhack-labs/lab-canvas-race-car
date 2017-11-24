var RIGHT_KEY = 39;
var LEFT_KEY = 37;

function Car(canvasId, sprite) {
  this.canvas = canvasId;
  this.ctx = this.canvas.getContext('2d');
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

  this.x = 220;
  this.y = 450;
  this.speed=5;

  document.onkeydown = this.onKeyDown.bind(this);
}

Car.prototype.isReady = function() {
  return this.sprite.isReady;
};

Car.prototype.onKeyDown = function () {
// debugger
  if (event.keyCode == RIGHT_KEY) {
    if(this.x<400)
    this.moveToRight();
  }else if (event.keyCode == LEFT_KEY) {
    if(this.x>0)
    this.moveToLeft();
  }
};

Car.prototype.moveToRight = function () {
  this.x += this.speed;
};
Car.prototype.moveToLeft = function () {
  this.x -= this.speed;
};


Car.prototype.draw = function() {
  // this.ctx.save();
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
  // this.ctx.restore();
};


// var car = new Car("canvasBoard", "./images/car.png");
// car.draw();
