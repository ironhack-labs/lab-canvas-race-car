function Obstacle(minX, maxX, maxY, maxWidth) {
  this.posX = this.getXPosition(minX, maxX);
  this.posY = -30;
  this.height = 30;
  this.background = '#880000';
  this.movY = 1;
  this.boundaries = {
    maxX: maxX,
    maxY: maxY
  }

  this.width = this.getWitdh(maxWidth);
}

/**
 * Moves the obstacles vertically and returns false
 * when the obstacle has reach the end of the canvas.
 * 
 * @returns boolean
 */
Obstacle.prototype.move = function() {
  this.posY += this.movY;

  if (this.posY > this.boundaries.maxY) {
    return false;
  }
  return true;
};

Obstacle.prototype.draw = function(ctx) {
  ctx.fillStyle = this.background;
  ctx.fillRect(this.posX, this.posY, this.width, this.height);
};

Obstacle.prototype.getXPosition = function(minX, maxX) {
  return Math.floor(Math.random() * (maxX - minX)) + minX;
}

Obstacle.prototype.getWitdh = function(maxWidth) {
  var width = Math.floor(Math.random() * maxWidth);

  if (this.posX + width > this.boundaries.maxX) {
    width = this.boundaries.maxX - this.posX;
  }

  return width;
}