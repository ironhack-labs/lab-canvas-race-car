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
  ctx.strokeStyle = '#FFFFFF'
  ctx.lineWidth = 8
  ctx.beginPath()
  ctx.moveTo(30, 0)
  ctx.lineTo(30, this.height)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(this.width - 30, 0)
  ctx.lineTo(this.width - 30, this.height)
  ctx.stroke()
  //Center lines
  ctx.beginPath()
  ctx.moveTo(this.width / 2, 0)
  switch (this.stage % 2) {
    case 0:
      ctx.
      break;
      case 1:
      break;
  }
}
