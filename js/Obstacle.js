class Obstacle {
    constructor(ctx, ObstX, ObstY) {
        this.ctx = ctx
        this.ObstX = ObstX
        this.ObstY = ObstY
    }

    createObstacle() {
        this.ctx.fillRect(100, 100, 100, 100)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 100, 100, 100)
    }
}