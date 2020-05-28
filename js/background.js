class Background {
  constructor(ctx) {
    this._ctx = ctx

    this.x = 0
    this.y = 0
    this.w = this._ctx.canvas.width
    this.h = this._ctx.canvas.height

    this.vx = 0
    this.vy = 4

    this.ax = 0
    this.ay = 0

    this._img = new Image()
    this._img.src = "./images/road.png"
  }

  draw() {
    //Se pinta una imagen luego de otra, la segunda se pinta en x=ancho de la imagen
    this._ctx.drawImage(this._img, this.x, this.y, this.w, this.h)
    this._ctx.drawImage(this._img, this.x, this.y - this.h, this.w, this.h)
  }

  move() {
    this.vx += this.ax
    this.vy += this.ay

    this.x += this.vx
    this.y += this.vy

    // if image out of canvas.... restart!
    if (this.y - this.h >= 0) {
      this.y = 0
    }
  }
}
