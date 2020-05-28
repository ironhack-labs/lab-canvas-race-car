class Obstacles {
  constructor(ctx) {
    this._ctx = ctx
    this.cw = this._ctx.canvas.width
    this.ch = this._ctx.canvas.height

    this.w = 75
    this.h = 150
    this.x = 84
    this.y = 0

    this.vx = 0
    this.vy = 4

    this.ax = 0
    this.ay = 4

    this._imgArr = [
      "./images/car-01.svg",
      "./images/car-02.svg",
      "./images/car-03.svg",
      "./images/car-04.svg"
    ]

    this._img = new Image()
    this._img.src = this._imgArr[
      Math.floor(Math.random() * this._imgArr.length)
    ]

    this.randomLane = Math.floor(Math.random() * 4 + 1)
  }

  draw() {
    this._ctx.drawImage(
      this._img,
      this.x * this.randomLane,
      this.y - this.h,
      this.w,
      this.h
    )
  }

  move() {
    this.y += this.vy * this.ay
  }
}
