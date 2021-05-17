class Obstacle {
    constructor(ctx, x, y, width, vy) {
      this.ctx = ctx;
  
      this.x = x
      this.y = y
  
      this.width = width
      this.height = 20
     
      this.vy = vy
    }
  
    draw() {
      
      this.ctx.save()
      this.ctx.fillStyle = "red"
      this.ctx.fillRect(this.x, this.y, this.width, this.height)
      this.ctx.restore()
    }
  
    move() {
      this.y += this.vy

      if (this.x + this.width >= this.ctx.canvas.width) {
        this.x = this.ctx.canvas.width - this.width;
      } else if (this.x <= 0) {
        this.x = 0;
      }
    }
  }