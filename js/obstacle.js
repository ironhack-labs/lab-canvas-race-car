class Obstacle {
    constructor(ctx, canvasSize, posX) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstacleSpecs = {
            pos: { x: posX, y: 30 },
            size: { w: 100, h: 10 },
            speed: 5
        }
    }

    drawObstacle() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(
            this.obstacleSpecs.pos.x,
            this.obstacleSpecs.pos.y,
            this.obstacleSpecs.size.w,
            this.obstacleSpecs.size.h
        )
    }

    moveObstacle() {
        this.obstacleSpecs.pos.y += this.obstacleSpecs.speed


    }

}


