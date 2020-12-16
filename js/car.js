class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx

        this.minX = 0
        this.x = x
        this.maxX = this.ctx.canvas.width

        this.vx = 0
        this.speed = 2

        this.y = y

        this.width = 50
        this.height = 100

        this.img = new Image()
        this.img.src = './images/car.png' // como si estuvieramos en la carpeta de html porque está importado
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }

        this.movements = {
            rigth: false,
            left: false
        }
    }

    isReady() {
        return this.img.isReady
      }

    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
    }

    move () {
        if (this.movements.rigth) {
            this.vx = this.speed
        } else if (this.movements.left) {
            this.vx = -this.speed
        } else {
            this.vy = 0 //no olvidar este else
        }
        // si hay también hacia arriba y hacia abajo se hace otro if debajo e independiente para que te puedas mover al mismo tiempo, por ejemplo, a la izquierda y arriba

        this.x += this.vx

        if (this.x + 50 >= this.ctx.canvas.width) {
            this.x = this.maxX - this.width
        } else if (this.x <= this.minX) {
            this.x = this.minX
        }
    }

    onKeyEvent(event) {
        // console.log(event.type) // -> keydown
        // console.log(event.keyCode) // -> saber las teclas
        //d3 - 11d: 37:03'

        const status = event.type === 'keydown'

        switch(event.keyCode) {
            case KEY_RIGTH:
                this.movements.rigth = status
                break;
            case KEY_LEFT:
                this.movements.left = status
                break;
        }
    }

    collidesWith(pipe) {
        console.log('Game over')
        return this.x < pipe.x + pipe.width &&
        this.x + this.width > pipe.x &&
        this.y < pipe.y + pipe.height &&
        this.y + this.height > pipe.y 
        
    }
}
