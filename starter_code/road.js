function Road(canvas, ctx) {
   this.canvas = canvas
   this.w = this.canvas.getAttribute("width");
   this.h = this.canvas.getAttribute("height");
   this.ctx = ctx;

   this.x= 0; 
   this.y = 0; 
 
}

Road.prototype.drawRect = function(x, y, width, height) {
  this.ctx.fillRect(x, y, width, height);
};

Road.prototype.draw = function() {
  
  var margen = 20;
  var margenInterior = 5;
  var linea = 8;

  
  this.ctx.fillStyle = "rgb(0,146,0)";
  this.drawRect(this.x, this.y, this.w, this.h);

  this.ctx.fillStyle = "rgb(127,127,127)";
  this.drawRect(this.x+margen, this.y, this.w - margen * 2, this.h);

  this.ctx.fillStyle = "rgb(255,255,255)";
  this.drawRect(this.x+margen + margenInterior, this.y, linea, this.h);

  this.drawRect(this.x+this.w - margen - margenInterior - linea, this.y, linea, this.h);

  var lineaIntermitente = 10;
  var anchoLineaIntermitente = 5;
  var altoLineaIntermitente = 30;
  for (var i = 0; i < this.h; i += 50) {
    this.drawRect(this.x+ this.w / 2, i+this.y, anchoLineaIntermitente, altoLineaIntermitente);
  }



  
};
