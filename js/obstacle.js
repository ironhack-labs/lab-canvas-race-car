class Obstacle {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstaclePosition = {
            x: (Math.random() * (this.canvasSize.w / 2 - 50) + 50),
            y: 0
        }
        this.obstacleSize = {
            w: Math.random() * (150 - 200) + 200,
            h: 20
        }
    }

    generateObstacles() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.obstaclePosition.x, this.obstaclePosition.y, this.obstacleSize.w, this.obstacleSize.h)
    }
    move() {
        this.obstaclePosition.y += 1
    }
}