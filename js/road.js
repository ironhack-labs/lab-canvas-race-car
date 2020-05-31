class Road {
    constructor(ctx) {
        this._ctx = ctx

        this.x = 0
        this.y = 0

        this.vx = 0
        this.vy = 8

        this.ax = 0
        this.ay = 0

        this.w = this._ctx.canvas.width
        this.h = this._ctx.canvas.height

        this._img = new Image()
        this._img.src = './images/road.png'
    }

    draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this._ctx.canvas.width,
            this._ctx.canvas.height
        )

        this._ctx.drawImage(
            this._img,
            this.x,
            this.y - this._ctx.canvas.height,
            this._ctx.canvas.width,
            this._ctx.canvas.height
        )
    }

    move() {
        this.vx += this.ax
        this.vy += this.ay

        this.x += this.vx
        this.y += this.vy

        if (this.y > this._ctx.canvas.height) {
            this.y = 0
        }
    }
}