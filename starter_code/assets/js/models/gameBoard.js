function GameBoard(ctx, width, height) {

  this.ctx = ctx;
  this.width = width;
  this.height = height;
}

GameBoard.prototype.draw = function() {
  
  this.ctx.save();
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(0, 0, this.width, this.height);
  this.ctx.fillStyle = "grey";
  this.ctx.fillRect(100, 0, this.width-200, this.height);
  this.ctx.strokeStyle = "#fff";
  this.ctx.lineWidth = 20;
  this.ctx.strokeRect(130, -100, this.width-260, this.height+100)
  this.ctx.beginPath();
  this.ctx.lineWidth = 10;
  this.ctx.setLineDash([35, 30])
  this.ctx.moveTo(this.width / 2, 0);
  this.ctx.lineTo(this.width / 2, this.height);
  this.ctx.stroke();
  this.ctx.closePath();
  this.ctx.restore();
}