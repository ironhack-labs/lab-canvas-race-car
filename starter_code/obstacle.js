class Obstacle {
  constructor(ctx, c) {
    this.ctx = ctx
    this.w =
      Math.floor(Math.random() * (this.ctx.canvas.width * 0.25 + 1)) +
      this.ctx.canvas.width * 0.3
    this.x =
      Math.floor(Math.random() * (this.ctx.canvas.width - 80 - this.w + 1)) + 40
    this.y = 0
    this.h = 60
    this.c = c

    this.vy = 2
  }

  draw() {
    this.ctx.fillStyle = this.c
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  move() {
    this.y += this.vy
  }

  collide(el) {
    const colX = el.x + el.w > this.x && el.x < this.x + this.w
    const colY = el.y + el.h > this.y && el.y < this.y + this.h

    return colX && colY
  }

  win(el) {
    if (el.vy === 0 && this.y - el.y > 0 && this.y - el.y <= 2) return true
    if (el.vy < 0 && this.y - el.y > 0 && this.y - el.y <= 5) return true

    return false
  }
}
