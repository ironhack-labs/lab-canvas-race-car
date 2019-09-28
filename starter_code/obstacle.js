class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = Math.random() * ctx.canvas.width/4 + ctx.canvas.width/3
    this.h = 10
    this.x = Math.random() * ctx.canvas.width
    this.y = -10

    this.vy = 2
    this.vx = 0
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
    this.x += this.vx

    // if (this.x<=0) {
    //     this.x = 0
    // }else if(this.x + this.w >= this.ctx.canvas.width){
    //   this.x = this.ctx.canvas.width - this.w
    // }
  }
}