class Background {
    constructor(ctx) {
        this._ctx = ctx

        this.x = 0
        this.y = 0

        this.w = this._ctx.canvas.width
        this.h = this._ctx.canvas.height

        this._img = new Image()
        this._img.src = "./images/road.png"
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
}