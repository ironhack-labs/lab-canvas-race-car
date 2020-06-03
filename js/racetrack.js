class Racetrack {
  constructor(ctx) {
    this._ctx = ctx, 
    this.x = 0;
    this.y = 0;
    this.speedX = 0;
    this.speedY = -2;
    this.accelerationY = 0;
    this.accelerationX = 0;
    this.widthCanvas = this._ctx.canvas.width,
    this.heightCanvas = this._ctx.canvas.height,
    this._imag = new Image();
    this._imag.src = "/Users/ironhack/Desktop/IronHack/lab-canvas-race-car/images/road.png";
  }

  draw() {
    this._ctx.drawImage(
      this._imag,
      this.x,
      this.y,
      this.widthCanvas,
      this.heightCanvas
    );

    this._ctx.drawImage(
      this._imag,
      this.x,
      this.y + this.heightCanvas,
      this.widthCanvas,
      this.heightCanvas
    );
  }

  move () {
    this.speedX += this.accelerationX
    this.speedY += this.accelerationY

    this.x += this.speedX
    this.y += this.speedY

    if(this.y + this.heightCanvas <= 0) {
      this.y = 0
    }
  }
}
