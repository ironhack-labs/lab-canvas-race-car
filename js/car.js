class Car {
  constructor(ctx) {
    this._ctx = ctx

    this.w = 75
    this.h = 150
    this.x = this._ctx.canvas.width * 0.5 - this.w * 1.7
    this.y = this._ctx.canvas.height * 0.5

    this.vx = 0
    this.vy = 0

    this.ax = 0
    this.ay = 0

    this._img = new Image()
    this._img.src = "./images/car.png"
  }

  draw() {
    this._ctx.drawImage(this._img, this.x, this.y, this.w, this.h)
  }

  move() {
    this.vx += this.ax
    this.vy += this.ay

    this.x += this.vx
    this.y += this.vy
  }
}
