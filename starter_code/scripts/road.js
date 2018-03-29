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
  this.ctx.fillRect(this.x + 40, this.y, this.canvas.width - 80, this.canvas.height);
}

Road.prototype.drawLateralLines = function () {
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(100, 0, 20, this.canvas.height);
  this.ctx.fillRect(this.canvas.width - 120, 0, 20, this.canvas.height);
}

Road.prototype.drawCentralLines = function () {
  this.ctx.fillStyle = "white";

  for (var i = this.y; i < this.canvas.height; i += 20) {
    this.ctx.fillRect(this.x + (this.canvas.width / 2) - 5, i, 10, 15);
  }
}