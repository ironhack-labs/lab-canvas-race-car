class Obstacle {
  constructor(ctx, width) {
    this.ctx = ctx
    this.x = this.randomX()
    this.y = 0

    this.width = width
    this.height = 60

    this.vy = 3

  }

  draw() {
    this.ctx.save()
    this.ctx.fillStyle = 'brown'
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.restore()
  }

  move() {
    this.y += this.vy
  }

  randomX() {
        return Math.floor(Math.random() * 500)
  }
}
