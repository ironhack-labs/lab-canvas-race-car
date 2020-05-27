class Car extends GameObject {
  constructor(ctx) {
    super(ctx);

    this.ax = 4;

    this.x = this._ctx.canvas.width * 0.5;
    this.y = this._ctx.canvas.height * 0.8;

    this.w = 40;
    this.h = 100;

    this._img = new Image();
    this._img.src = "./images/car.png";
  }

  move() {
    //console.log(`velocity = ${this.vx} acc = ${this.ax}`)
    if (this.vx >= 10) {
      this.vx = 10;
    } else if (this.vx <= -10) {
      this.vx = -10;
    }

    if (this.x <= this._ctx.canvas.width * 0.15) {
      this.x = this._ctx.canvas.width * 0.15;
    } else if (this.x >= this._ctx.canvas.width * 0.85 - this.w) {
      this.x = this._ctx.canvas.width * 0.85 - this.w;
    }
    super.move();
  }
}
