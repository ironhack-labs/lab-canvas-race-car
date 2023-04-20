class Obstacle {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.w = 100
        this.h = 20

    }

    drawObstacle() {
        this.ctx.fillStyle = "yellow"
        this.ctx.fillRect(this.posX, this.posY++, this.w, this.h)

    }
}