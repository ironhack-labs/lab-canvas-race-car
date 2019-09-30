const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
  constructor(ctx) {
    this.ctx = ctx,
    this.x = 208
    this.y = 800
    this.w = 50
    this.h = 100
    this.vx = 0
    this.vy = 0

    this.img = new Image()
    this.img.src = "images/car.png"

    this._setListeners()
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  _setListeners() {
    document.onkeydown = (event) => {
      if (event.keyCode === RIGHT_KEY) {
        this.vx = 5
      } else if (event.keyCode === LEFT_KEY) {
        this.vx = -5
      }
    }

    document.onkeyup = (event) => {
      if (event.keyCode === RIGHT_KEY) {
        this.vx = 0
      } else if (event.keyCode === LEFT_KEY) {
        this.vx = 0
      }
    }
  }

  _checkBorderCollision() {
    if (this.x <= 0) {
      this.x = 0
    } else if (this.x + this.w >= this.ctx.canvas.width) {
      this.x = 500 - this.w
    }
  }

  move() {
    this.x += this.vx

    this._checkBorderCollision()
  }
}