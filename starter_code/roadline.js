class RoadLine extends Rectangle {
  constructor(ctx, y) {
    super()
    this.ctx = ctx
    this.w = 5
    this.h = 10
    this.x = this.ctx.canvas.width / 2 - this.w / 2
    this.y = y
    this.c = "white"

    this.vy = -1
  }
  move() {
    this.y += this.vy
  }
}
