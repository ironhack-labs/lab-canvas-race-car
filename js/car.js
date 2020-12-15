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


}