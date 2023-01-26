class Obstacle {
    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstaclePosition = {
            x: 0,
            y: 0
        }

        this.obstacleSize = {
            w: 200,
            h: 20

        }

        this.obstacleSpeed = 2

    }

    // generateObstacle() {
    //     this.obstaclePosition.x = Math.floor(Math.random() * (this.canvasSize.w - this.obstacleSize.w))
    //     this.ctx.fillStyle = 'red'
    //     this.ctx.fillRect(
    //         this.obstaclePosition.x,
    //         this.obstaclePosition.y,
    //         this.obstacleSize.w,
    //         this.obstacleSize.h
    //     )
    // }

    draw() {
        this.move()

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(
            this.obstaclePosition.x,
            this.obstaclePosition.y,
            this.obstacleSize.w,
            this.obstacleSize.h
        )
    }

    move() {
        this.obstaclePosition.y += this.obstacleSpeed
    }
}