function Road() {
  this.ctx = ctx;
}

Road.prototype.render = function() {
  // Grey background
  this.ctx.fillStyle ='grey';
  this.ctx.fillRect(0, 0 , 300, 450);
  // Green rectangles
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(0, 0, 26, 450);
  this.ctx.fillRect(274, 0, 26, 450);
  // White boundaries
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(34, 0, 10, 450);
  this.ctx.fillRect(256, 0, 10, 450);
  // Dashed line
  this.ctx.lineWidth = 6;
  this.ctx.strokeStyle = 'white';
  this.ctx.beginPath();
  this.ctx.setLineDash([30, 40]);
  this.ctx.moveTo(150, 0);
  this.ctx.lineTo(150, 450);
  this.ctx.stroke();
};
