class Obstacle {
    constructor(ctx, canvasSize, posX, carWidth) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.posX = posX
        this.posY = 0
        this.posX = Math.floor(Math.random() * this.canvasSize.w)
        this.carWidth = carWidth
        this.size = {
            w: Math.floor(2 * carWidth + Math.random() * (this.canvasSize.w - 4 * carWidth)),
            h: this.canvasSize.h * .04
        }
    }

    drawObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.posX, this.posY, this.size.w, this.size.h)
    }
}