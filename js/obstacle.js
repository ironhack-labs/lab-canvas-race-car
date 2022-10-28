class Obstacle {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.obstacleSize = {
            w: Math.floor(Math.random() * (canvasSize.w - 110) - 200) + 200,
            h: 20
        }
        this.obstaclePos = {
            x: Math.floor(Math.random() * (canvasSize.w - this.obstacleSize.w)),
            y: 0
        }
        this.canvasSize = canvasSize
    }

    drawObstacle() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, 30)
    }

    moveObstacle() {
        this.obstaclePos.y += 7
    }
}