class Obstacle {
    constructor(ctx, posX, posY, width, speed) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: height }
        this.obstacleSpeed = speed
        this.obstacleInstance = undefined

        this.init()
    }

    init() {
        this.createObstacle()
    }

    createObstacle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.x, this.obstacleSize.y)
    }

}