class Car {
    constructor(ctx) {

        this.ctx = ctx;
        this.x = 200
        this.y = 490
        this.width = 45;
        this.height = 95;

        this.img = new Image()
        this.img.src = './images/car.png'
        this.img.onload = () => {
            this.draw()
        }

        this.speed = 3
        this.vx = 0
    
        this.movements = {
    
            left : false,
            right : false
    
        }
        

    }
    draw() {

        this.ctx.save()
        this.ctx.drawImage(
            this.img,
            this.ctx.canvas.width / 2 - this.width / 2,
            this.ctx.canvas.height / 2 - this.height + 300,
            this.width,
            this.height,
        )
        this.ctx.restore()
    }

    setUpListeners(event) {
        const status = event.type === 'keydown'

        if (event.keyCode === KEY_RIGHT) {
            this.movements.right = status
        }

        if (event.keyCode === KEY_LEFT) {
            this.movements.left = status
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


        if (this.x <= 70) {
            this.x = 70
          }
          
        if (this.x <= 380) {
            this.x = 380
          }

    }

}

    /*this.image.isready
    this.img.onload = () => {
        this.img.isReady = true
    }*/