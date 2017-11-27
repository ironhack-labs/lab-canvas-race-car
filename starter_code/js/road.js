function Road(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

}

Road.prototype.drawRect = function(x, y, width, height) {
this.ctx.beginPath();
this.ctx.rect(x, y, width, height);
this.ctx.fill();
this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
this.ctx.closePath();
};

Road.prototype.draw = function() {
this.drawRect(0, 0, 500, 700);

};

var road = new Road("canvas");
