function Obstacle(canvas, width, height) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = this.canvas.width;
  this.y = 0;
  this.width = width;
  this.height = height;


}

Obstacle.prototype.draw = function() {
  this.ctx.save();
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.x -=1;
  this.ctx.restore();
};
