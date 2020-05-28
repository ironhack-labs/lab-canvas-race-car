const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
  constructor(ctx) {
    this._ctx = ctx
    this.cw = this._ctx.canvas.width
    this.ch = this._ctx.canvas.height

    this.w = 75
    this.h = 150
    this.x = this.cw * 0.5 - this.w * 1.7
    this.y = this.ch * 0.5

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
        document.querySelector(".right-arrow").style.display = "block"
        this.vx = 5
      } else if (e.keyCode === LEFT_KEY) {
        document.querySelector(".left-arrow").style.display = "block"
        this.vx = -5
      }
    }

    document.onkeyup = (e) => {
      if (e.keyCode === RIGHT_KEY) {
        document.querySelector(".right-arrow").style.display = "none"
        this.vx = 0
      } else if (e.keyCode === LEFT_KEY) {
        document.querySelector(".left-arrow").style.display = "none"
        this.vx = 0
      }
    }
  }
}
