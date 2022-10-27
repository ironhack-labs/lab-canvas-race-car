class Car {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.obstacleSize = {
            w: 100,
            h: 30
        }
        this.obstaclePos = {
            x: 200,
            y: 0
        }
        this.obstacleSpeed = 20,
            this.canvasSize = canvasSize

        this.init()
    }
    init() {

    }

    drawObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
        this.move()
    }

    move() {

        this.obstaclePos.y += this.obstacleSpeed
    }


}
