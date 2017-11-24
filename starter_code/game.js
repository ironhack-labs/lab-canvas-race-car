function Game(canvasId, width, height) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
  this.car = new Car(this.canvas, "./images/car.png");

  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
}

Game.prototype.paintRoad = function() {

  this.ctx.fillStyle = "rgb(62, 162, 1)";
  this.ctx.fillRect(0, 0, 25, this.height);
  this.ctx.fillRect(this.width - 25, 0, 25, this.height);
  this.ctx.fillStyle = "rgb(177, 177, 177)";
  this.ctx.fillRect(25, 0, 15, this.height);
  this.ctx.fillRect(this.width - 40, 0, 15, this.height);
  this.ctx.fillRect(50, 0, this.width - 100, this.height);
  this.ctx.fillStyle = "white";
  for (var i = 0; i < this.height; i += 120) {
    this.ctx.fillRect(225, i, 15, 60);
  }
};


Game.prototype.isReady = function() {
  return this.car.isReady();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.clear();
  if (this.isReady()) {
    // for (var i = 0; i < this.bars.length; i++) {
    //   this.bars[i].draw();
    // }
    this.paintRoad();
    this.car.draw();
  }

  window.requestAnimationFrame(this.draw.bind(this));
};
