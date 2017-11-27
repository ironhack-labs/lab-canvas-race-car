function Road(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

}

Road.prototype.drawGarden = function(x, y, width, height) {
this.ctx.beginPath();
this.ctx.rect(x, y, width, height);
this.ctx.fill();
this.ctx.fillRect(0, 0, 500, 700);
this.ctx.fillStyle = "rgb(0, 153, 51)";
this.ctx.fill();
this.ctx.fillStyle = "rgb(102, 102, 102)";
this.ctx.fillRect(50, 0, 400, 700);
this.ctx.closePath();
};

Road.prototype.drawRoad = function(x, y, width, height) {
this.ctx.beginPath();
this.ctx.rect(x, y, width, height);
this.ctx.closePath();
};

Road.prototype.drawLines = function(){
this.ctx.save();
this.ctx.fillStyle = "#FFFFFF";
this.ctx.fillRect(62, 0, 10, 700);
this.ctx.fillStyle = "#FFFFFF";
this.ctx.fillRect(427, 0, 10, 700);
this.ctx.restore();
};

Road.prototype.drawDashes = function(){
  this.ctx.lineWidth = 6;
  this.ctx.strokeStyle = "#FFFFFF";
  this.ctx.beginPath();
  this.ctx.setLineDash([30, 30]);
  this.ctx.moveTo(250, 20);
  this.ctx.lineTo(250, 700);
  this.ctx.stroke();
};

Road.prototype.draw = function() {
this.drawGarden(0, 0, 500, 700);
this.drawRoad(50, 0, 400, 700);
this.drawLines(70, 0, 100, 700);
this.drawDashes();
};

var road = new Road("canvas");
