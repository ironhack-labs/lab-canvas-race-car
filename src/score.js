class Score {
    constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight

        this.width = 120
        this.height = 150

        this.posX = 120
        this.posY = 50

        this.score = 0
    }

    draw() {
        this.ctx.font = "25px Arial";
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillText(`Score: ${this.score}`, this.posX, this.posY);
    }
}