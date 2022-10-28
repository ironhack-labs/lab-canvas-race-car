class Obstacle {
    constructor(ctx, ctxWidth, ctxHeight) {

        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight

        this.posX = posX
        this.posY = posY

        this.width = 70
        this.height = 20

        this.velY = 5


    }

    draw() {
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.ctx.fillStyle = "red"
        this.move()
    }

    move() {
        this.posY += this.velY
    }
}