function Obstacles() {
  this.x1 = 30;
  this.y1 = 0;
  this.x2 = 100;
  this.y2 = 200;
  this.x3 = 40;
  this.y3 = 400;
}

Obstacles.prototype._CreateObstacles = function(canvas) {
  canvas.ctx.fillStyle = "#FF0000";
  canvas.ctx.fillRect(this.x1, this.y1, 150, 30);
  canvas.ctx.fillRect(this.x2, this.y2, 150, 30);
  canvas.ctx.fillRect(this.x3, this.y3, 150, 30);
};

Obstacles.prototype._MoveObstacles = function() {
  if (this.y1 < 580) {
    this.y1 += 10;
  } else {
    this.y1 = 0;
    this.x1 = Math.floor(Math.random() * 100) + 30;
  }
  if (this.y2 < 580) {
    this.y2 += 10;
  } else {
    this.y2 = 0;
    this.x2 = Math.floor(Math.random() * 100) + 100;
  }
  if (this.y3 < 580) {
    this.y3 += 10;
  } else {
    this.y3 = 0;
    this.x3 = Math.floor(Math.random() * 100) + 80;
  }
};
