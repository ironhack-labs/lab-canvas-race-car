class Car {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 214
        this.y = 550
        
        this.w = 72
        this.h = 120

        this.vx = 0

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
        this.x += this.vx

        if (this.x + this.w >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w
            this.vx = 0
        }

        if (this.x - this.w <= 0) {
            this.x = this.w
            this.vx = 0
        }
    }
}