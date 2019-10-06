class Obstacle {
  constructor(ctx) {
    this.ctx = ctx
    this.y = 0
    this.x = this._randomNumber(0, this.ctx.canvas.width)
    this.w = this._randomNumber(40, this.ctx.canvas.width/2)
    this.h = 30
    this.vy = 5

    this.tick = 0
  }
  
  draw() {
    this.ctx.fillStyle = "orange"
    this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    )

  }

  move() {
    this.y += this.vy
  }

  _randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min 
  }

  collide(el) {
    const colX = el.x + el.w > this.x && el.x < this.x + this.w
    const colY = el.y + el.h > this.y && el.y < this.y + this.h

    return colX && colY
  }

  isVisible() {
    return !(
      this.y + this.h >= this.ctx.canvas.height
    )
  }
}