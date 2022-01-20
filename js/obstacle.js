class Obstacle {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: height }
        this.obstacleInstance = undefined

        this.init()
    }

    init() {
        this.drawFilledRectangle()
    }

    drawFilledRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.x, this.obstacleSize.y)

    }


}
