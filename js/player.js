class Player {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;

        this.vx = 0

        this.speed = 3

        this.width = 50
        this.height = 100

        this.img = new Image;
        this.img.src = './images/car.png'
        this.img.onload = () => {
            this.imgReady = true
        }

        this.movements = {
            left: false,
            right: false
        }
    }

    draw() {
        if( this.imgReady ) {
            this.ctx.save()
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height,
            )
            this.ctx.restore()
        }

    }

    setupListeners(event) {
        const status = event.type === 'keydown'

        switch(event.keyCode) {
          case KEY_RIGHT:
            this.movements.right = status
            break
          case KEY_LEFT:
            this.movements.left = status
            break
          default:
            break
        }
    }

    move() {
        if (!this.movements.right && !this.movements.left) {
            this.vx = 0
        }

        if (this.movements.right) {
            this.vx = this.speed
          }

        if (this.movements.left) {
            this.vx = -this.speed
        }

        this.x += this.vx

        if (this.x <= 0) {
            this.x = 0
          }

        if (this.x + this.size >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.size
        }
        
   }

   collidesWith(obstacle) {

    if (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    ) {
      return true
    }

    return false
  }

}