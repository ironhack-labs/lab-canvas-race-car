class Car {
    constructor(ctx) {
        this._ctx = ctx

        this.x = this._ctx.canvas.width * 0.45
        this.y = this._ctx.canvas.height * 0.75

        this.vx = 0
        this.vy = 0

        this.w = this._ctx.canvas.width * 0.1
        this.h = this._ctx.canvas.height * 0.2

        this.ax = 10
        this.ay = 0

        this._img = new Image()
        this._img.src = './images/car.png'
    }
    draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this.x += this.vx
        this.y += this.vy

        this.checkBorders()
    }

    checkBorders() {
        if (this.x <= 27 ) {
            this.x = 27
        } else if (this.w + this.x >= this._ctx.canvas.width -27) {
            this.x = this._ctx.canvas.width - this.w - 27
        }
    }
}