function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
// debugger
  this.car=new Car(this.canvas,"./images/car.png");
}

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
    this.car.draw();
  }

  window.requestAnimationFrame(this.draw.bind(this));
};

var game = new Game("canvasBoard");
game.draw();
