class Background {
  constructor(ctx) {
    this.ctx = ctx

    this.x = 0
    this.y = 0
    this.h = this.ctx.canvas.height
    this.w = this.ctx.canvas.width

    this.vy = SPEED

    this.img = new Image()
    this.img.src = './images/road.png';
    this.img.isReady = false
    this.img.onload = () => {
      this.img.isReady = true
    }

    this.movements = {
      right: false
    }
  }

  isReady() {
    return this.img.isReady
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y - this.h,
        this.w,
        this.h
      )

      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      )
    }
  }

  move() {
    this.y += this.vy
    if (this.y >= this.h) {
      this.y = 0
    }
  }

}