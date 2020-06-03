class Obstacles {
    constructor(ctx) {
        this._ctx = ctx
        // this._x = 100
        this._x = Math.random() * 300 + 50 //this._ctx.canvas.width / 2
        this._y = 0
        this._w = Math.random() * 100 + 100
        this._h = 40
        this._vy = 7
        this._vx = Math.round(Math.random() * (-1 - 1) + 1);
    }

    draw() {
        this._ctx.fillRect(
            this._x,
            this._y,
            this._w,
            this._h
        )
    }

    move() {
        this._y += this._vy
        this._x += this._vx
    }

    isVisible() {
        return (
            this._y < this._ctx.canvas.height &&
            this._y > 0 - this._ctx.canvas.height
        )
    }
}