class Car {
  constructor(ctx, x, y, w, h, img) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.vx = 0
    this.vy = 0

    this.img = img
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  move() {
    this.x += this.vx
    this.y += this.vy
  }
}