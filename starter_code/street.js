class Street {
  constructor(ctx) {
    this.ctx = ctx
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0

    this.vy = -5

    this.img = new Image()
    this.img.src = "images/Carretera.png"
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.ctx.drawImage(
      this.img,
      this.x,
      this.y - this.h,
      this.w,
      this.h
    )
  }

  move() {
    this.y -= this.vy

    if (this.y - this.h >= 0) {
      this.y = 0
    }

  }

}