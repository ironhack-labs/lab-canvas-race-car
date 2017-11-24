
function Road() {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 198;
    this.y = 0;
    this.width = 4;
    this.height = 20;
  }
  
Road.prototype.drawRoad = function(){
    this.ctx.fillStyle = "#008100";
    this.ctx.fillRect(0, 0, 25, 600);
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(25, 0, 10, 600);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(35, 0, 10, 600);
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(45, 0, 310, 600);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(355, 0, 10, 600);
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(365, 0, 10, 600);
    this.ctx.fillStyle = "#008100";
    this.ctx.fillRect(375, 0, 25, 600);
}

Road.prototype.drawLines = function(){
    this.ctx.save();
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.y +=5;
    this.ctx.restore();
}
