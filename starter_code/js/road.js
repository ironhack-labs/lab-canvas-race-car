
  function Road(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = 800;
    this.h = 700;
    this.x = 0;
    this.y = 0;
    this.drawRoad()
    this.drawGrass()
    this.drawLines()

  }

Road.prototype.draw = function() {
  this.drawGrass();
  this.drawRoad();
  this.drawLines();
}
Road.prototype.drawRect = function(x, y, width, height) {
  this.ctx.fillRect(x, y, width, height)
}
Road.prototype.drawSquare = function(x, y, width) {
  this.drawRect(x, y, width, width);
}
Road.prototype.drawLines = function(){
    this.ctx.fillStyle = "rgb(255,255,255)"
    this.drawRect(80,this.y,20,this.h)
    this.drawRect(700,this.y,20,this.h)
    this.ctx.strokeStyle = "rgb(255,255,255)"
    this.dashedLine(400, this.y, 400, this.y+700, 40, 30)
}
Road.prototype.dashedLine = function(sX, sY, dX, dY, lineLength,lineSpacing){
  this.ctx.beginPath();
  this.ctx.lineWidth = 12;
  this.ctx.setLineDash([lineLength, lineSpacing]);
  this.ctx.moveTo(sX, sY);
  this.ctx.lineTo(dX,dY);
  this.ctx.stroke();
}
Road.prototype.drawGrass = function(){
  this.ctx.fillStyle = "rgb(0,139,0)"
  this.drawRect(0,this.y,this.w,this.h)
}
Road.prototype.drawRoad = function(){
  this.ctx.fillStyle = "rgb(128,128,128)"
  this.drawRect(60,this.y,this.w-120,this.h)
}

Road.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

