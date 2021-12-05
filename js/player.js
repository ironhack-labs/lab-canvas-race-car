class Player {
  constructor(ctx, x, y) {
    this.ctx = ctx;

    this.x = 250 - 20
    this.y = 550

    this.vx = 8

    this.width = 40;
    this.height = 80;

    this.img = new Image();
    this.img.src = "../images/car.png"
    this.img.isReady = false;

    this.img.onload = () => {
      this.img.isReady = true
    }
  }

  draw() {
    if (this.img.isReady) {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height,
      )
    }
  }

  onKeyDown(keyCode) {
    if (keyCode === RIGHT && this.x + this.width < this.ctx.canvas.width) {
      this.x += this.vx
    }
    if (keyCode === LEFT && this.x > 0) {
      this.x -= this.vx
    }
  }
}