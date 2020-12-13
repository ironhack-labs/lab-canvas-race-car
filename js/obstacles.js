class Obstacle {
    constructor(ctx, x, y, width) {
      this.ctx = ctx
      this.x = x
      this.y = y
  
      this.height = 30
      this.width = width
  
      this.speedY = 1
    }
  
    draw() {
      this.ctx.save()
      this.ctx.fillStyle = 'brown'
      this.ctx.fillRect(this.x,this.y, this.width, this.height)
      this.ctx.restore()
    }
  
    move() {
      this.y += this.speedY
    }
  }