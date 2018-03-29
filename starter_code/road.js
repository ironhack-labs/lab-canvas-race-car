
Canvas.prototype.drawRect = function(x, y, width, height) {
  this.ctx.fillStyle='white';
  this.ctx.fillRect(270, 10, 10, 5)
}

Canvas.prototype.draw= function(x, y, width, height){
  this.drawRect();
}