function Carretera(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.w = 400;
  this.h = 500;
  this.pepe = 80;
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


Carretera.prototype.mover = function () {
if (this.pepe > 130) {
  this.pepe = 0;
}
  this.blancoCarretera();
  this.drawRect(200, 20 - this.pepe, 5, 35);
  this.drawRect(200, 80 - this.pepe, 5, 50);
  this.drawRect(200, 160 - this.pepe, 5, 50);
  this.drawRect(200, 240 - this.pepe, 5, 50);
  this.drawRect(200, 320 - this.pepe, 5, 50);
  this.drawRect(200, 400 - this.pepe, 5, 50);
  this.drawRect(200, 480 - this.pepe, 5, 50);
  this.drawRect(200, 560 - this.pepe, 5, 50);
 
  this.pepe++;
}

Carretera.prototype.draw = function() {
  this.verdeCarretera();
  this.drawRect(350, 0, 40, 500);
  this.drawRect(10, 0, 40, 500);
  this.grisCarretera();
  this.drawRect(50, 0, 300, 500);
  this.blancoCarretera();
  this.drawRect(55, 0, 5, 500);
  this.drawRect(340, 0, 5, 500);

};

