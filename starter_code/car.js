const TOP_KEY = 38
const DOWN_KEY = 40
const RIGHT_KEY = 39
const LEFT_KEY = 37
const SPACE_KEY = 32

class Car {
  constructor(ctx) {
    this.ctx = ctx
    this.w = 50
    this.h = 100
    this.x = this.ctx.canvas.width / 2 - this.w / 2
    this.y = this.ctx.canvas.height - this.h * 1.2
    this.vx = 0
    this.vy = 0
    this.ay = 0

    this.img = new Image()
    this.img.src = "./images/car.png"

    this._setListeners()
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  move() {
    this.x += this.vx
    this.y += this.vy
    if (this.x + this.w >= this.ctx.canvas.width - 40) {
      this.vx *= 0
      this.x = this.ctx.canvas.width - this.w - 40
    }
    if (this.x <= 40) {
      this.vx *= 0
      this.x = 40
    }
    if (this.y <= 0) {
      this.vx *= 0
      this.y = 0
    }
    if (this.y + this.h >= this.ctx.canvas.height) {
      this.vy *= 0
      this.y = this.ctx.canvas.height - this.h
    }
  }

  _setListeners() {
    document.onkeydown = e => {
      if (e.keyCode === TOP_KEY) {
        this.vy = -3
      } else if (e.keyCode === DOWN_KEY) {
        this.vy = 3
      } else if (e.keyCode === RIGHT_KEY) {
        this.vx = 5
      } else if (e.keyCode === LEFT_KEY) {
        this.vx = -5
      }
    }

    document.onkeyup = e => {
      if (e.keyCode === TOP_KEY) {
        this.vy = 0
      } else if (e.keyCode === DOWN_KEY) {
        this.vy = 0
      } else if (e.keyCode === RIGHT_KEY) {
        this.vx = 0
      } else if (e.keyCode === LEFT_KEY) {
        this.vx = 0
      }
    }
  }

  reset() {
    this.x = this.x = this.ctx.canvas.width / 2 - this.w / 2
    this.y = this.ctx.canvas.height - this.h * 1.2
  }

  _checkCollisions() {
    const col = this.obstacles.some(o => {
      return o.collide(this.car)
    })

    if (col) {
      this._gameOver()
    }
  }
}
