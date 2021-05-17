class Background {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 0;

    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;

    this.img = new Image();
    this.img.src = "./images/road.png";
    this.img.isReady = false;
    this.img.onload = () => {
      this.img.isReady = true;
    };
  }

  isReady() {
    return this.img.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(this.img, this.x, 0, this.width, this.height);
    }
  }
}
