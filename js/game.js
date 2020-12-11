
class Game {
    constructor(ctx) {
      this.ctx = ctx
      this.background = new Background(ctx)
  
      this.interval = undefined
    }
  
    start() {
      this.inverval = setInterval(() => {
        this.clear()
  
        this.draw()
        
        this.move()
      }, 1000 / 140)
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
  
    draw() {
      this.background.draw()
    }
  
    move() {
      this.background.move()
    }
  }