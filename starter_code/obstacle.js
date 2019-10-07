class Obstacle {
  constructor(ctx) {
    this.ctx = ctx
    this.w = Math.floor(Math.random() * 250) + 80
    this.h = 40

    this.x =  this._postionObstacle()
    this.y = 0 - this.h

    this.vy = 2.5
  }

  draw() {
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

  collide(el) {
    const colX = el.x + el.w > this.x && el.x < this.x + this.w
    const colY = el.y + el.h > this.y && el.y < this.y + this.h

    return colX && colY
  }
  
  _postionObstacle() {
    const position = Math.floor(Math.random() * this.ctx.canvas.width) - this.w
    if(position < 0) {
      return 5
    }
    return position
  }
}