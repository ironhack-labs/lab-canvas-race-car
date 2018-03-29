function Carretera(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.w = 400;
  this.h = 500;
}
Carretera.prototype.drawRect = function(x, y, width, height) {
  this.ctx.fillRect(x, y, width, height);
};
Carretera.prototype.verdeCarretera = function() {
  this.ctx.fillStyle = "#1BA02D";
  this.ctx.strokeStyle = this.ctx.fillStyle;
};

Carretera.prototype.grisCarretera = function() {
  this.ctx.fillStyle = "#747875";
  this.ctx.strokeStyle = this.ctx.fillStyle;
};

Carretera.prototype.blancoCarretera = function() {
  this.ctx.fillStyle = "#FFFFFF";
  this.ctx.strokeStyle = this.ctx.fillStyle;
};

Carretera.prototype.draw = function() {
  this.verdeCarretera();
  this.drawRect(350, 0, 40, 500);
  this.drawRect(10, 0, 40, 500);
  this.grisCarretera();
  this.drawRect(50, 0, 300, 500);
  this.blancoCarretera();
  this.drawRect(55, 0, 5, 500);
  this.drawRect(340, 0, 5, 500);
  this.drawRect(200, 20, 5, 35);
  this.drawRect(200, 80, 5, 50);
  this.drawRect(200, 160, 5, 50);
  this.drawRect(200, 240, 5, 50);
  this.drawRect(200, 320, 5, 50);
  this.drawRect(200, 400, 5, 50);
  this.drawRect(200, 480, 5, 50);
};