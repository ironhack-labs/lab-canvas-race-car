class Obstacle {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.obstacleSize = {
            w: 130 + Math.random() * 100,
            h: 30
        }
        this.obstaclePos = {
            x: 100 + Math.random() * 100,
            y: 0
        }
        this.obstacleSpeed = 5
        this.canvasSize = canvasSize
    }
    draw() {
        this.ctx.fillStyle = '#AC7088'
        this.ctx.fillRect(
            this.obstaclePos.x,
            this.obstaclePos.y,
            this.obstacleSize.w,
            this.obstacleSize.h
        )
        this.move()
    }

    move() {
        this.obstaclePos.y += this.obstacleSpeed
    }
}