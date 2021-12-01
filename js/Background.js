class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "../images/road.png";
    this.image.onload = () => {
      this.draw();
    };
  }
  draw() {
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
  }
}
