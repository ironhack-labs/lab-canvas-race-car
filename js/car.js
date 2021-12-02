class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x
        this.y = y

        this.width = 50;
        this.height = 100;

        this.speed = 6;
        this.vx = 0;

        this.img = new Image();
        this.img.src = '/images/car.png',
        this.img.isReady = false;

        this.img.onload = () => {
        this.img.isReady = true
        }

        this.movements = {
            up: false,
            down: false,
            left: false,
            right: false
          }       
    }

    

    draw() {
        this.ctx.save()

        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height,
            )
        }

        this.ctx.restore()
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
        if (this.x + this.width >= this.ctx.canvas.width) {
          this.x = this.ctx.canvas.width - this.width
        }
      }
}