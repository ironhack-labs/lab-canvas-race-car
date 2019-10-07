const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
  constructor(ctx) {
    this.ctx = ctx
    this.w = 50
    this.h = 100
    this.vx = 0
    this.vy = 0
    this.x = (0.5 * this.ctx.canvas.width) - (this.w / 2)
    this.y = 0.8 * this.ctx.canvas.height

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
    );
  }

  move() {
    this.x += this.vx
    if (this.x < 0 || this.x + this.w >= this.ctx.canvas.width ) {
      this.vx = 0
    }
  }

  _setListeners() {
    document.onkeydown = (e) => {
      if (e.keyCode === RIGHT_KEY) {
        this.vx = 3
      } else if (e.keyCode === LEFT_KEY) {
        this.vx = -3
      }
    }
    document.onkeyup = (e) => {
      if (e.keyCode === RIGHT_KEY) {
        this.vx = 0
      } else if (e.keyCode === LEFT_KEY) {
        this.vx = 0
      }
    }
  }
}