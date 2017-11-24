function Obstacle(canvas,x,y, width, height) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;


}

Obstacle.prototype.draw = function() {
  // debugger
  this.ctx.save();
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.y +=1;
  this.ctx.restore();
};
