class Obstaculo {
    constructor(ctx, height, x, y, color) {
        this._width = (Math.random()*200)+50
        this._height = height
        this._posX = (Math.random()*200)+90
        this._posY = y
        this._color = color
        this._ctx = ctx
        this._speedX = 0
        this._speedY = 0
    }
    update() {
        this._posY += 1
        this._ctx.fillStyle = this._color
        this._ctx.fillRect(this._posX, this._posY, this._width, this._height)
    }
}



