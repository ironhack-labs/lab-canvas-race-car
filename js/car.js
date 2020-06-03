class Car {
    constructor(ctx) {
        this._ctx = ctx

        this.x = 220
        this.y = 560

        this.w = 55
        this.h = 112

        this.vx = 0

        this.ax = 0.1

        this._img = new Image()
        this._img.src = "./images/car.png"

        new Movements(this).init()
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
        // this.vx += this.ax
        this.x += this.vx

        if(this.x <= 0) {
            this.x = 0
        } else if (this.x + this.w >= this._ctx.canvas.width) {
            this.x = this._ctx.canvas.width - this.w
        }

    }

}