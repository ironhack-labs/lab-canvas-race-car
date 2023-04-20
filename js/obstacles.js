class Obstacles {

    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstaclesSpecs = {
            size: { w: 50, h: 10 },
            pos: { x: Math.random() * 500, y: 0 },
            speed: 10
        }
    }

    drawObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(
            this.obstaclesSpecs.pos.x,
            this.obstaclesSpecs.pos.y,
            this.obstaclesSpecs.size.w,
            this.obstaclesSpecs.size.h)
        this.move()
    }
    move() {
        this.obstaclesSpecs.pos.y += this.obstaclesSpecs.speed
    }


}