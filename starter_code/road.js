function Road() {
  this.width = 400
  this.height = 700
  this.stage = 0
}

Road.prototype.move = function() {
  this.stage++
}

Road.prototype.draw = function(ctx) {
  //Grass
  ctx.fillStyle = '#008000'
  ctx.fillRect(0, 0, this.width, this.height);
  //Road
  ctx.fillStyle = '#7F7F7F'
  ctx.fillRect(20, 0, this.width - 40, this.height)
  //Side lines
  ctx.setLineDash([0,0])
  ctx.lineDashOffset = 0
  ctx.strokeStyle = '#FFFFFF'
  ctx.lineWidth = 8
  ctx.beginPath()
  ctx.moveTo(30, 0)
  ctx.lineTo(30, this.height)
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(this.width - 30, 0)
  ctx.lineTo(this.width - 30, this.height)
  ctx.stroke()
  ctx.closePath()
  //Center line
  ctx.setLineDash([20, 20]);
  ctx.lineDashOffset = 0 - (this.stage % 40)
  ctx.beginPath()
  ctx.moveTo(this.width / 2, -20)
  ctx.lineTo(this.width / 2, this.height + 20);
  ctx.stroke()
  ctx.closePath()
}
