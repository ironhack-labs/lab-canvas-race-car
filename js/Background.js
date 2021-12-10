class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.y = 0;
    this.height = 441;
    this.velocity = -1.5;
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
      this.y,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
    this.ctx.drawImage(
      this.image,
      0,
      this.y - this.height,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
    this.ctx.drawImage(
      this.image,
      0,
      this.y - this.height - this.height,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
  }

  move() {
    this.y -= this.velocity;
    if (this.y > this.ctx.canvas.height) {
      this.y = 0;
    }
  }
}
