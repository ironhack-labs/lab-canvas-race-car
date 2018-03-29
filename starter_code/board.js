function Canvas(id) {
  var canvas = document.getElementById(id);
  this.ctx = canvas.getContext("2d");
  this.w = 550;
  this.h = 520;
}

Canvas.prototype.drawRect = function(x, y, width, height) {
  this.ctx.fillStyle='green';
  this.ctx.fillRect(0, 0, this.w, this.h)
  
}

Canvas.prototype.draw= function(x, y, width, height){
  this.drawRect();
}