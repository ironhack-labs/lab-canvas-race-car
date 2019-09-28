const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
  constructor(ctx) {
    this.ctx = ctx
    this.x0 = this.ctx.canvas.width / 2 - 50
    this.x = this.x0
    this.y0 = 0.6 * this.ctx.canvas.height 
    this.y = this.y0
    this.w = 90
    this.h = 180
    this.vx = 0
    this.vy = 0
    this.ay = 0

    this.img = new Image()
    this.img.src = "images/car.png"

    this._setListeners()
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.x += this.vx
     if (this.x >= this.ctx.canvas.width - this.w * 1.5 || this.x <= this.w - 40){
      this.vx = 0
    }
    
  }

   _setListeners() {
    document.onkeydown = (e) => {
      if (e.keyCode === LEFT_KEY) {
        this.vx = -5
      } else if(e.keyCode === RIGHT_KEY) {
       this.vx = 5
      } 
    }

   document.onkeyup = (e) => {
      if (e.keyCode === RIGHT_KEY) {
        this.vx = 0
      } else if (e.keyCode === LEFT_KEY) {
        this.vx = 0
      }
    }
  }

}