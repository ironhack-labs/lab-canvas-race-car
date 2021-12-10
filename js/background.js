class Background {

    constructor(ctx) {
        this.ctx = ctx;

        this.x = 0
        this.y = 0
        this.vy = 3

        this.img = new Image();
        this.img.src = './images/road.png'
        this.img.onload = () => {
          this.img.isReady = true
        }
    }

    draw() {
        this.ctx.drawImage(
          this.img,
          this.x ,
          this.y,
          this.ctx.canvas.width,
          this.ctx.canvas.height,
        )
        this.ctx.drawImage(
          this.img,
          this.x,
          this.y - this.ctx.canvas.height,
          this.ctx.canvas.width,
          this.ctx.canvas.height,
        )
    }

    move() {
      this.y += this.vy
      if (this.y + this.ctx.canvas.height >= 1400) {
        this.y = 0
      }
    }
}