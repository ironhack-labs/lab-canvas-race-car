class Obstacles {
    constructor(ctx, posX, posY, width, height, speed, gameSize) {
        this.ctx = ctx
        this.obstaclePos = {x: posX, y: posY}
        this.obstacleSize = {w: width, h: height}
        this.obstacleSpeed = speed
        this.gameSize = gameSize

        this.init()
    }

    draw() {
        this.ctx.draw(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }
}