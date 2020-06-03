class Car {
  constructor(ctx) {
    this._ctx = ctx, 
    this.x = 206
    this.y = 500
    this.width = 80, 
    this.height = 150, 
    this.speedX = 0;
    this.speedY = 0;
    this.accelerationY = 0;
    this.accelerationX = 0;
    this.widthCanvas = this._ctx.canvas.width,
    this.heightCanvas = this._ctx.canvas.height,
    this._imag = new Image();
    this._imag.src = "/Users/ironhack/Desktop/IronHack/lab-canvas-race-car/images/car.png";
    this.movements()
  }

  draw() {
    this._ctx.drawImage(
      this._imag,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }

  move () {
    this.speedX += this.accelerationX
    this.speedY += this.accelerationY

    this.x += this.speedX
    this.y += this.speedY

    if (this.x > (this.widthCanvas * 0.75)) {
      this.x = this.widthCanvas * 0.75
    }

    if (this.x < (this.widthCanvas * 0.10 )) {
      this.x = this.widthCanvas * 0.10
    }

  }

  movements() {
    document.addEventListener('keydown', e => {
      if (e.keyCode === RIGHT) {
        this.speedX = 4
      } else if (e.keyCode === LEFT) {
        this.speedX = -4
      }
    })

    document.addEventListener('keyup', e => {
      if (e.keyCode === RIGHT) {
        this.speedX = 0
      } else if (e.keyCode === LEFT) {
        this.speedX = 0
      }
    })
  }
}
