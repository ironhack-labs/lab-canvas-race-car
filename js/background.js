class Background {
  
  constructor(ctx) {
    this.ctx = ctx

    this.x = 0
    this.y = 0
    this.h = this.ctx.canvas.height
    this.w = this.ctx.canvas.width
    this.vy = 2
    this.img = new Image()
    this.img.src = './images/road.png'
  }

  onKeyEvent(event) {
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
      this.x ,
      this.y - this.h,
      this.w,
      this.h
    )
  }

  move() {
    this.y += this.vy

    if (this.y >= this.h) {
      this.y = 0
    }
  }
}
