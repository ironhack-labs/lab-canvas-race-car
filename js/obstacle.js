class Obstacle {
    constructor(ctx) {
      this.ctx = ctx
      this.x = Math.random() * 300 + 100
      this.dist = Math.random() * 100 + 100
      this.y = 0 
      this.w = Math.random() * 40 + 50
      this.h = Math.random() * 40 + 50
      this.vy = 3
    }
  
    draw() {
      this.ctx.fillRect(
        this.x,
        this.y,
        this.w,
        this.h
      )
    }
  
    move() {
      this.y += this.vy
    }
  
    isVisible() {
      return (
        this.y < this.ctx.canvas.height * 2 &&
        this.y > 0 - this.ctx.canvas.height
      )
    }
  }
  