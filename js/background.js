class Background {

    constructor(ctx) {
        this.ctx = ctx;

        this.img = new Image();
        this.img.src = './images/road.png'
        this.img.onload = () => {
          this.draw()
          this.img.isReady = true
        }
    }

    draw() {

        this.ctx.drawImage(
          this.img,
          0,
          0,
          this.ctx.canvas.width,
          this.ctx.canvas.height,
        )
    }
}