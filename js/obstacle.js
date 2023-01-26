class Obstacle {
    constructor(ctx, canvaSize) {
        this.ctx = ctx
        this.canvaSize = canvaSize
        this.obstacleSize = {
            w: Math.random() * (200 - 100) + 100,
            h: 30,
        }
        this.obstaclePos = {
            x: Math.random() * (this.canvaSize.w / 2 - 60) + 60,
            y: 0
        }

    }

    draw() {
        this.ctx.fillStyle = 'orange'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }
    move() {
        this.obstaclePos.y += 3
    }
}