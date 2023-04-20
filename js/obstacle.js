class Obstacles {
    constructor(ctx, canvasSize, posX, speed) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstacleSpecs = {
            // size: { w: size, h: size },
            pos: { x: posX, y: 0 },
            speed: 10
        }
    }
    drawObstacle() {

        this.move()
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.obstacleSpecs.pos.x, this.obstacleSpecs.pos.y, 200, 50)
    }
    move() {
        this.obstacleSpecs.pos.y += this.obstacleSpecs.speed
    }
}