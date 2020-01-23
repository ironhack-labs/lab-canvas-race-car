class Obstacles {
    constructor(ctx) {

        this._xPos = undefined
        this._yPos = -40
        this.speed = 10
        this._xLimit = 500
        this._ctx = ctx

    }

    createObstacle() {


        this._xPos = Math.random() * (this._xLimit - 20) + 20


    }

    drawObstacle() {

        this._ctx.fillStyle = 'red'
        this._ctx.fillRect(this._xPos, this._yPos, 300, 40)

    }

    fallObstacle() {
        this._yPos += this.speed
    }

}