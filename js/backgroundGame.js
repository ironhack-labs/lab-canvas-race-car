class BackgroundGame {
    constructor (ctx) {
        this._ctx = ctx

        this.x = 0
        this.y = 0
        this.v = this._ctx.canvas.width
        this.h = this._ctx.canvas.height
        this._img = new Image()
        this._img.src = './images/road.png'

        this.vx = 0
        this.vy = 3
        
    }

    draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.v,
            this.h
        )

        this._ctx.drawImage(
            this._img,
            this.x,
            this.y - this._ctx.canvas.height,
            this.v,
            this.h
        )
    }

    move() {
        this.y += this.vy

        if (this.y >= this.h) {
            this.y = 0
        }
    }


}