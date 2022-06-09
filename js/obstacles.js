class Obstacle {
    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.obstaclePosition = { x: undefined, y: 0 }
        this.obstacleSize = { w: undefined, h: 20 }
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.obstaclePosition.x = Math.floor(Math.random() * 300)
        this.obstacleSize.w = Math.floor(Math.random() * 300)
    }

    draw() {
        this.move()
        this.ctx.fillStyle = '#890407'
        this.ctx.fillRect(this.obstaclePosition.x, this.obstaclePosition.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    move() {
        this.obstaclePosition.y += 10
    }

}