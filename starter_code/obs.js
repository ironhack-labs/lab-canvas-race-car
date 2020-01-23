class Obs {

    constructor(ctx, oPosX) {
        this._ctx = ctx
        this._oPosX = oPosX
        this._oPosY = 0
        this._oWidth = 100
        this._oHeight = 20
        this._oVel = 2
    }

    drawObs() {
        this._ctx.fillStyle = 'red'
        this._ctx.fillRect(this._oPosX, this._oPosY, this._oWidth, this._oHeight)
    }

    moveObs() {

        this._oPosY += this._oVel
    }

}