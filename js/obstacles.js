class Obstacle {
    constructor(ctx, x, y) {
      this.ctx = ctx
  
      this.x = x
      this.y = 0 
      this.width = Math.floor(Math.random() * (200 - 100 + 1) + 50)
      this.height = 25
  
      this.vy = 3
    }
  
    draw() {
      this.ctx.save()
      this.ctx.fillStyle = 'red'
      this.ctx.fillRect(this.x, this.y, this.width, this.height)
      this.ctx.restore()
    }
  
    move() {
      this.y += this.vy
    }
  }