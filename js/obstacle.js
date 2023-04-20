class Obstacles {
    constructor(ctx, speed, h, y) {
        this.ctx = ctx
        this.obstaclesSpecs = {
            size: { w: 200, h: h },
            pos: { x: 40, y: y },
            speed: speed
        }
        this.init()
    }

    init() {
        this.drawObstacles()
    }

    drawObstacles() {
        this.move()
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(
            this.obstaclesSpecs.pos.x,
            this.obstaclesSpecs.pos.y,
            this.obstaclesSpecs.size.w,
            this.obstaclesSpecs.size.h
        )
    }

    move() {
        this.obstaclesSpecs.pos.y += this.obstaclesSpecs.speed
    }

}