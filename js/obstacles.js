class Obstacles {
    constructor(ctx, x, y, w, h) {
      this.ctx = ctx
      this.x = x
      this.y = y
      this.w = w
      this.h = h
        
      this.vx = 0
      this.vy = 1
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
      this.x += this.vx
      this.y += this.vy

      if( this.y > 700 ){
          this.y = 0
        
          this.x = this.randomX()
          this.w = this.randomW()
        }

    }
    randomX() {
        return Math.random()*400
   
    }
    randomW() {
        return 100+Math.random()*200
   
    }
  }

