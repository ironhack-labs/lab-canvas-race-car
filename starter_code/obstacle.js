class Obstacle {
  constructor(ctx, areaW, areaH, vel) {
    this.ctx = ctx
    this.posX = this.randomNumber(80, areaW - 100)
    console.log(this.posX)
    this.posY = 0
    this.height = 30
    this.width = this.randomNumber(this.posX, 300 - this.posX)
    this.vel = vel;
    console.log(this)
  }
  drawObstacle() {
    this.ctx.fillStyle = '#880000'
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height)

  }
  moveObstacle() {
    this.posY += this.vel
  }
  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }
}