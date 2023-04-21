class Obstacle {
    constructor(ctx, canvasSize, posX) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstacleSpecs = {
            pos: { x: posX, y: 30 },
            size: { w: 100, h: 10 },
            speed: 10
        }
    }

    drawObstacle() {

        this.ctx.fillStyle = '#870007'
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


