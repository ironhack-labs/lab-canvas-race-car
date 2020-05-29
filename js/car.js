const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
  constructor(ctx) {
    this._ctx = ctx
    this.cw = this._ctx.canvas.width
    this.ch = this._ctx.canvas.height

    this.w = 70
    this.h = 145
    this.x = this.cw * 0.52
    this.y = this.ch * 0.6

    this.vx = 0
    this.vy = 0

    this.ax = 0
    this.ay = 0

    this._img = new Image()
    this._img.src = "./images/car.png"

    this._setListeners()
  }

  draw() {
    this._ctx.drawImage(this._img, this.x, this.y, this.w, this.h)
  }

  move() {
    this.x += this.vx

    if (this.x >= this.cw * 0.75) {
      this.vx = -1
      this.x = this.cw * 0.75
    } else if (this.x <= this.cw * 0.11) {
      this.vx = 1
      this.x = this.cw * 0.11
    }
  }

  _setListeners() {
    document.onkeydown = (e) => {
      if (e.keyCode === RIGHT_KEY) {
        document.querySelector(".arrows-img").style.backgroundPosition =
          "right center"
        this.vx = 8
      } else if (e.keyCode === LEFT_KEY) {
        document.querySelector(".arrows-img").style.backgroundPosition =
          "left center"
        this.vx = -8
      }
    }

    document.onkeyup = (e) => {
      if (e.keyCode === RIGHT_KEY) {
        document.querySelector(".arrows-img").style.backgroundPosition =
          "center center"
        this.vx = 0
      } else if (e.keyCode === LEFT_KEY) {
        document.querySelector(".arrows-img").style.backgroundPosition =
          "center center"
        this.vx = 0
      }
    }
  }
}
