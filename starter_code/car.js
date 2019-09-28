const KEY_LEFT = 37
const KEY_RIGTH =39
class Car {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = 15
    this.h = 30
    this.x = (ctx.canvas.width - this.w)/2
    this.y = ctx.canvas.height - this.h -10

    this.vy = 0
    this.vx = 0
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
    )
  }

  move() {
    this.y += this.vy
    this.x += this.vx

    if (this.x<=0) {
        this.x = 0
    }else if(this.x + this.w >= this.ctx.canvas.width){
      this.x = this.ctx.canvas.width - this.w
    }
  }

  _setListeners(){
    document.onkeydown = (e) => {
      if (e.keyCode === KEY_LEFT) {
          this.vx = -2
      }else if (e.keyCode === KEY_RIGTH){
        this.vx = 2
      }
    }
    document.onkeyup = (e) => {
      if (e.keyCode === KEY_LEFT) {
          this.vx = 0
      }else if (e.keyCode === KEY_RIGTH){
        this.vx = 0
      }
    }   
  }
}