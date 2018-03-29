function Road(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;

  this.x = 0;
  this.y = 0;
}

Road.prototype.draw = function () {
  this.drawGrass();
  this.drawRoad();
  this.drawLateralLines();
  this.drawCentralLines();
}

Road.prototype.drawGrass = function () {
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(this.x, this.y, this.canvas.width, this.canvas.height);
}

Road.prototype.drawRoad = function () {
  this.ctx.fillStyle = "grey";
  this.ctx.fillRect(this.x + 40, this.x + 40, this.canvas.width, this.canvas.height);
}

Road.prototype.drawLateralLines = function() {
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(100, 0, 20, this.canvas.height);
  this.ctx.fillRect(this.canvas.width - 120, 0, 20, this.canvas.height);
}

Road.prototype.drawCentralLines = function() {
  // Canvas.prototype.drawRoadCenterLine = function () {
  //   var i = 0;

  //   setInterval(function () {
  //     this.clear();
  //     this.drawSquare(i++, 0, 20);
  //   }.bind(this), 100);
  // }
}