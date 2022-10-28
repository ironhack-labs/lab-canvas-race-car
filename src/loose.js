class Loose {
    constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight

        this.width = 350
        this.height = 250

        this.posX = window.innerWidth / 6
        this.posY = window.innerHeight / 2
    }

    draw() {
        this.ctx.font = "40px Arial";
        this.ctx.fillStyle = "red";
        this.ctx.fillText(`GAME OVER!`, this.posX, this.posY);

    }
}