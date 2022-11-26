class Car {
    constructor(ctx) {
        this.ctx = ctx
        this.height = 100
        this.width = 50
        this.x = this.ctx.canvas.width / 2 - 25
        this.y = this.ctx.canvas.height - 75 - this.height
        this.img = new Image()
        this.img.src = "images/car.png"
        this.isReady = false
        this.img.onload = () => {
            this.isReady = true
        }
        this.speed = 10
    }

    draw() {
        if(this.isReady) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
    }

    moveRight() {
        if(this.x < this.ctx.canvas.width - 70 - this.width) {
            this.x += this.speed
        }
    }

    moveLeft() {
        if(this.x >= 75) {
            this.x -= this.speed
        }
    }
}