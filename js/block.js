class Obstacle {
    constructor(ctx, posX, posY, height, width, speed) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { h: height, w: width }
        this.obstacleInstanced = undefined

        this.speed = speed
    }

    drawobstacle() {

        this.ctx.fillStyle = 'blue'
        this.obstacleInstanced = this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
        this.moveDown()

    }
    moveDown() {
        this.obstaclePos.y += this.speed
    }


}