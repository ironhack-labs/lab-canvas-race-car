
const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
    constructor(ctx){
        this.ctx = ctx
        this.x = this.ctx.canvas.width * 0.5
        this.w = 50
        this.h = 100
        this.y = this.ctx.canvas.height - this.h - 50
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
        );
    }

    move(){
        this.x += this.vx
    }

   _setListeners() {
        document.onkeydown = (e) => {
          if (e.keyCode === RIGHT_KEY) {
            this.vx = 7
          } else if (e.keyCode === LEFT_KEY) {
            this.vx = -7
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