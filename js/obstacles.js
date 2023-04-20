class obstacles {

    constructor(ctx, posX, posY) {
        this.ctx = ctx

        this.posX = posX
        this.posY = posY
        this.w = 130
        this.h = 40
    }

    drawObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.posX, this.posY++, this.w, this.h)
    }
}