class Background {
  constructor (ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width; //ancho total cnavas
    this.h = this.ctx.canvas.height; //alto total canvas
    this.x = 0;
    this.y = 0;

    this.vy = 5; //velocidad en y

    this.img = new Image()
    this.img.src = "./images/image.png"
  }

  draw() {
    //dibujamos 1 road
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

    //dibujamos segundo road
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y - this.h,
      this.w,
      this.h
    )
  }

  //movimiento del road
  move() {
    this.y += this.vy
    if (this.y - this.h >= 0) {
      this.y = 0
    }
  }
}