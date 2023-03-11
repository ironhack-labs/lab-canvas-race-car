class Background {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.w = w;
    this.h = h;

    this.image = new Image();
    this.image.src = "./images/road.png";

    this.posX = 0;
    this.posY = 0;

    this.velY = 2;
  }
  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.w, this.h);
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY - this.h,
      this.w,
      this.h
    );

    this.move();
  }
  move() {
    this.posY += this.velY;
    if (this.posY >= this.h) {
      this.posY = 0;
    }
  }
}
