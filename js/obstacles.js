class Obstacle {
    constructor(ctx, canvasSize, x) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstaclePosition = {
            x: this.x = x,
            y: 0
        }

        this.obstacleSize = {
            w: 200,
            h: 20

        }

        this.obstacleSpeed = 1
    }

    move() {
        this.obstaclePosition.y += this.obstacleSpeed
    }

    draw() {
        // this.generateObstacle()
        this.move()

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePosition.x, this.obstaclePosition.y, this.obstacleSize.w, this.obstacleSize.h)
    }

}