class Car {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 214
        this.y = 550
        
        this.w = 72
        this.h = 120

        this.vx = 0
        //this.speed = 2

        this.movements = {
            up: false,
            down: false,
            left: false,
            right: false
        }

        this.img = new Image()
        this.img.src = '../images/car.png'
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }
    }

    isReady() {
        return this.img.isReady
      }

    draw() { 
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    move() {
          if (this.movements.left) {
            this.vx = -this.speed
          } else if (this.movements.right) {
            this.vx = this.speed
          } else {
            this.vx = 0
          }
      
          this.x += this.vx
          this.y += this.vy
      
          if (this.x + this.size >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.size
          } else if (this.x <= 0) {
            this.x = 0
          }
    }

    onKeyEvent(event) {
        const status = event.type === 'keydown'
    
        switch(event.keyCode) {
          case KEY_RIGHT:
            this.movements.right = status
            break;
          case KEY_LEFT:
            this.movements.left = status
            break;
        }
      }
}

const KEY_RIGHT = 39
const KEY_LEFT = 37