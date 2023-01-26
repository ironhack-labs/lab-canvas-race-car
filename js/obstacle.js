class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstacleSpeed = 1
        this.obstaclePos = { x: 0, y: 0 }
    }

    draw() {
        this.move()

        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, 500, 20)
    }

    move() {
        this.obstaclePos.y += this.obstacleSpeed
    }

}