class Obstacles {
    constructor(ctx, posX, posY, width, speed) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: width * .75 }
        this.rectangleSpeed = speed
        this.init()

    }
    drawFilledRectangle() {
        this.ctx.fillStyle = 'red'
        const rectangle = this.ctx.fillRect(this.gameSize.w / 2 - 50, this.gameSize.h / 2 - 50, 100, 100)
    }
        move() {
        this.obstaclePos.x += this.rectangleSpeed
        this.checkCollision()

}