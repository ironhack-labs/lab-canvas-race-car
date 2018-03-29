function Road(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = 0;
  this.y = 0;
}

Road.prototype.drawRoad = function() {
  
  
  this.drawRectGreen(0, 0, 50, this.canvas.height);
  this.rectSmallGray(50, 0, 10, this.canvas.height);
  this.drawRectGreen(this.canvas.width - 50, 0, 50, this.canvas.height);
  this.rectSmallGray(this.canvas.width - 60, 0, 10, this.canvas.height);
  this.rectBigGray(70, 0, 460, this.canvas.height);
  this.rectCentralWhite(300, 0, 10, 50);
};

Road.prototype.drawRectGreen = function(x, y, width, height) {
  this.ctx.fillStyle = "rgba(20, 168, 14, 1)";
  this.ctx.fillRect(x, y, width, height);
};

Road.prototype.rectSmallGray = function(x, y, width, height) {
  this.ctx.fillStyle = "rgba(133, 131, 129, 1)";
  this.ctx.fillRect(x, y, width, height);
};

Road.prototype.rectBigGray = function(x, y, width, height) {
  this.ctx.fillStyle = "rgba(133, 131, 129, 1)";
  this.ctx.fillRect(x, y, width, height);
};

Road.prototype.rectCentralWhite = function(x, y, width, height) {
  this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
  this.ctx.fillRect(x, y, width, height);
  var y = 0;
  for (var i = 0; y < 750; i++) {
    this.ctx.fillRect(x, y, width, height);
    y += 70;
  }
};
