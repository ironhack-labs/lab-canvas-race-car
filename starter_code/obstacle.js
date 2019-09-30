class Obstacle {
  constructor(ctx) {
    this.ctx = ctx
    this.h = 20
    this.w = this.ctx.canvas.width
    this.distance = Math.floor(Math.random() * (350 - 250) ) + 250
    this.x = 0
    if (Math.random() > 0.5) {
      this.x = this.x - this.distance
    } else {
      this.x = this.ctx.canvas.width - this.distance
    }
    
    this.y = 0
    this.vy = 2

    
  }

  draw() {
    this.ctx.fillRect (
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  collide(el) {
    const colX = el.x + el.w > this.x && el.x < this.x + this.w 
    const colY = el.y + el.h > this.y && el.y < this.y + this.h

    return colX && colY
  }

  obstaclePassed(el) {
    return el.y === this.y
  }

  move() {
    this.y += this.vy
  }
}