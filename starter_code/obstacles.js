class Obstacle {
    constructor(ctx) {
        this._ctx = ctx
        console.log(ctx)
        this._posX = 200
        this._posY = 0
        this._widthSize = undefined
    }

    random() {
        this._posX = Math.random() * (200 - 30) + 30
        // this._widthSize = Math.random()
        console.log(this._posX)
    }

    drawObstacle() {

        this._ctx.lineWidth = 10
        this._ctx.strokeStyle = "black"
        this._ctx.beginPath()
        this._ctx.moveTo(45, this._posY)
        this._ctx.lineTo(140, this._posY)
        this._ctx.stroke()
        console.log('draw')
    }

    fallObstacle() {
        this._posY = this._posY + 1
        console.log(this._posY)
    }
}