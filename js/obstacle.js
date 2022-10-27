class Obstacle {
    constructor(ctx, ctxWidth) {
        this.ctx = ctx
        //this.ctxWidth = ctxWidth
        // this.ctxHeight = ctxHeight

        this.posX = Math.floor(Math.random() * 300)
        this.posY = 50
        this.height = 30
        this.width = Math.floor(Math.random() * 250)

        this.velY = 1
        this.velX = 0.2

    }
    draw() {
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.move()
    }
    move() {
        this.posY += this.velY
        if (this.posX > 60) {
            this.posX -= this.velX
        } else if (this.posX < 500 - this.width - 60) {
            this.posX += this.velX
        }
    }

}