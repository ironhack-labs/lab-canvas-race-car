class Car {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 214
        this.y = 550
        
        this.w = 72
        this.h = 120

        this.speed = 6
        this.vx = 0

        this.movements = {
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
      this.ctx.save()
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
      this.ctx.restore()
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
  
      if (this.x + this.w >= this.ctx.canvas.width) {
        this.x = this.ctx.canvas.width - this.w
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

    crash(obstacle){
      if(obstacle.y <= this.y + this.w){
        return this.y <= obstacle.y + obstacle.height &&
        this.x <= obstacle.x + obstacle.width &&
        this.x + this.w >= obstacle.x
      }
    }
}

