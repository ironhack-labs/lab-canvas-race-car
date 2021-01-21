class Obstacle {
    constructor(ctx, canvasSize, carWidth) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.carWidth = carWidth
        this.posY = 0
        this.posX = Math.floor(Math.random() * (this.canvasSize.w - 3 * this.carWidth))
        this.size = {
            w: Math.floor(3 * carWidth + Math.random() * (this.canvasSize.w - 6 * carWidth)),
            h: this.canvasSize.h * .04
        }
    }

    drawObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.posX, this.posY, this.size.w, this.size.h)
    }

    moveObstacle() {
        this.posY += 5
    }

    getLeftBorder() {
        return this.posX
    }
    getRightBorder() {
        return this.posX + this.size.w
    }
    getTopBorder() {
        return this.posY
    }
    getBottomBorder() {
        return this.posY + this.size.h
    }
}