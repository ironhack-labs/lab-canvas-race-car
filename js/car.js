const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
    constructor(ctx) {
        this._ctx = ctx

        this.x = this._ctx.canvas.width * 0.45
        this.y = this._ctx.canvas.height * 0.8

        this.w = 50
        this.h = 100

        this.vx = 0
        this.vy = 0

        this.ax = 0
        this.ay = 0

        this._img = new Image ()
        this._img.src = "./images/car.png"
    }

    draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }


    move() {
      document.addEventListener('keydown', event => {
        switch(event.keyCode) {
          case RIGHT:
            this.x += 0.005;
            break;
          case LEFT:
            this.x -= 0.005
            break;
        }
      })
      document.addEventListener('keyup', event => {
        switch(event.keyCode) {
          case RIGHT:
            this.x -= 0;
            break;
          case LEFT:
            this.x += 0
            break;
        }
      })

        this.x += this.vx
        // if (this.vx > 10) {
        // this.vx = 0
        // }
        console.log(this.x)
        // if image out of canvas.... restart!
        if (this.x + this.w <= 0) {
          this.x = 0
        }
        if (this.x >= this._ctx.canvas.width) {
          this.x = (this._ctx.canvas.width - this.w)
        }
    }

    _checkCollisions() {
        if(this.y + this.r >= this.ctx.canvas.height) {
          this.vy *= -1
          this.y = this.ctx.canvas.height - this.r
        }
        if(this.x + this.r >= this.ctx.canvas.width) {
          this.vx *= -1
        }
        if(this.x - this.r <= 0) {
          this.vx *= -1
        }
      }
}