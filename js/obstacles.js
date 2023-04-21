class Obstacle {
    constructor(ctx, canvasSize, posX, size, speed) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstaclesSpecs = {
            size: { w: size, h: size },
            pos: { x: posX, y: 0 },
            speed: speed
        }
        this.init()
    }
    init() {
        this.drawObstacle()
    }
    drawObstacle() {
        this.move()
        this.ctx.fillStyle = 'orange'
        this.ctx.fillRect(this.obstaclesSpecs.pos.x, 0, this.obstaclesSpecs.size.w, this.obstaclesSpecs.size.h)
    }
    move() {
        this.obstaclesSpecs.pos.y += this.obstaclesSpecs.speed
    }
}