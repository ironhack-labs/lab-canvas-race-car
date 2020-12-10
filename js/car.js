class Car {
  constructor(ctx, x, y, w, h, img) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.vx = 0

    this.img = img
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  move(mv) {
    let newX = this.x + mv
    if (newX > 0 && newX < this.ctx.canvas.width - this.w) {
        this.x = newX
    }
  }
}