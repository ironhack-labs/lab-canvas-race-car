class Obstacle {
    constructor(ctx, canvasSize, posX) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstaclesSpecs = {
            pos: { x: posX, y: 0 },
            size: { w: 200, h: 50 },
            speed: 10
        }
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(
            this.obstaclesSpecs.pos.x,
            this.obstaclesSpecs.pos.y,
            this.obstaclesSpecs.size.w,
            this.obstaclesSpecs.size.h,
        )
    }
    move() {
        this.obstaclesSpecs.pos.y += 5
    }
}
