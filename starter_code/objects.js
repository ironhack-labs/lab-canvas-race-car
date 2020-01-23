class obsts {
    constructor(ctx, posX, posY, wWidth, wHeight, vel) {
        this._ctx = ctx
        this._posX = posX
        this._posY = posY
        this._obst = undefined
        this._wWidth = wWidth
        this._wHeight = wHeight
        this._vel = vel
    }

    drawObj() {
        this._ctx.fillStyle = 'black'
        this._ctx.fillRect(this._posX, this._posY, this._wWidth, this._wHeight)
    }
    move() {
        this._posY += this._vel
        this.drawObj()
    }



}