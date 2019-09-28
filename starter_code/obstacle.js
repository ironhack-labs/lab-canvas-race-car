class Obstacle {
  constructor(ctx) {
    this.ctx = ctx
    this.x = Math.random() * 700
    this.y = 0
    this.w = Math.random() * 500
    this.h = 20
    this.vy = 5
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
}