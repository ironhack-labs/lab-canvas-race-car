class Rectangle {
  constructor(ctx, x, y, w, h, c) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c
  }
  draw() {
    this.ctx.fillStyle = this.c
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
  }
}
