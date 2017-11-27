

var RIGHT_KEY = 39;

function Car(canvasId, img) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');

  this.img = new Image();
  this.img.src = "./images/car.png";
  this.img.isReady =  false;
  this.img.scale = 0.3;
  this.img.onload = (function() {
    this.img.isReady = true;
    this.img.frameIndex = 0;
    this.img.cFrames = 3;
    this.img.rFrames = 1;
    this.img.frameWidth = this.img.width / this.img.cFrames;
    this.img.frameHeight = this.img.height / this.img.rFrames;
    this.width = this.img.frameWidth * this.img.scale;
    this.height = this.img.frameHeight * this.img.scale;
  }).bind(this);

  this.x = 0;
  this.y = 0;
  this.speed = 10;

  document.onkeydown = this.onKeyDown.bind(this);
}

Car.prototype.isReady = function() {
  return this.img.isReady;
};

Car.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Car.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.moveToRigth();
  }
};

Car.prototype.moveToRigth = function() {
  if (this.img.frameIndex > 2) {
    this.img.frameIndex = 1;
  } else {
      this.img.frameIndex++;
  }
  this.x += this.speed;
};

Car.prototype.stop = function() {
  this.img.frameIndex = 0;
};

Car.prototype.draw = function() {
  this.clear();
  if (this.isReady()) {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.frameWidth,
      0,
      this.img.frameWidth,
      this.img.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height
      );
  }
  window.requestAnimationFrame(this.draw.bind(this));
};

var car = new Car("canvas", "./images/car.png");
