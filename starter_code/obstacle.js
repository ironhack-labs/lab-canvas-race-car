function Obstacle(xAxisLength, obstacleLength, y) {
  this.x = Math.floor(Math.random() * (xAxisLength - obstacleLength))
  this.y = y
  this.length = obstacleLength
}


Obstacle.prototype.move = function() {
  this.y += 5
}

Obstacle.prototype.draw = function(ctx) {
  ctx.setLineDash([0,0])
  ctx.lineDashOffset = 0
  ctx.strokeStyle = '#880000'
  ctx.lineWidth = 15
  ctx.beginPath()
  ctx.moveTo(this.x, this.y)
  ctx.lineTo(this.x + this.length, this.y)
  ctx.stroke()
  ctx.closePath()
}
