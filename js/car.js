class Car {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 200;
        this.y = 450;

        this.vx = 0;
        //this.vy = 0;
        this.speed = 7;


        this.width = 100;
        this.height = 150;

        this.img = new Image();
        this.img.src = "/Users/miguel/IRONHACK/MODULO1/lab-canvas-race-car/images/car.png"

        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true;
        }
        this.movements = {
            left: false,
            right: false
        }

    }

    draw() {
        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height,
            )
        }
    }
    // (1/3) CREAMOS UN EVENTO PARA ASIGNARLO A LAS FLECHAS DEL TECLADO PARA QUE EL COCHE SE MUEVA
    setupListener(event) {
        const status = event.type === 'keydown'
        switch (event.keyCode) {
            case KEY_LEFT:
                this.movements.left = status
                break;
            case KEY_RIGHT:
                this.movements.right = status
                break
            default:
                break
        }

    }
    move() {
        if (!this.movements.right && !this.movements.left) {
            this.vx = 0;
        }
        if (this.movements.right) {
            this.vx = this.speed
        }
        if (this.movements.left) {
            this.vx = -this.speed
        }

        this.x += this.vx

        // El coche se va por el lado de la derecha...
        if (this.x <= 0) {
            this.x = 0
        }
        if (this.x + this.width >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.width
        }

    }
    collidesWith(obstacle) {
        if (
          this.x < obstacle.x + obstacle.width &&
          this.x + this.width > obstacle.x &&
          this.y < obstacle.y + obstacle.height &&
          this.y + this.height > obstacle.y
        ) {
          return true;
        }
        return false
      }
}