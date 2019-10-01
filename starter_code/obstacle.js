class Obstacle {
  constructor(ctx) {
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.w = this.ctx.canvas.width / 2 + Math.floor((Math.random() - 0.5) * 50)
    this.h = 20

    // Que salga en la izquierda o derecha
    if (Math.random() > 0.5) {
      this.x = 0.1 * this.ctx.canvas.width
    } else {
      this.x = 0.9 * this.ctx.canvas.width -this.w
    }
  }

  draw() {
    new Rectangle(
      this.ctx,
      this.x,
      this.y,
      this.w,
      this.h,
      'red'
    ).draw()
  }

  move() {
    this.y += 1
  }

  collide(el) {
    const colX = el.x + el.w > this.x && el.x < this.x + this.w
    const colY = el.y + el.h > this.y && el.y < this.y + this.h

    console.log('colX => ' + colX)
    console.log('colY => ' + colY)

    return colX && colY
  }

}