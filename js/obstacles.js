class Obstacle {
    constructor(ctx, gameSize) {
        this.ctx = ctx
        this.obstaclePos = { x: this.randomizePos(), y: 0 }
        this.obstacleSize = { w: this.randomizeWidth(), h: 30 }
        this.gameSize = gameSize
        this.init()
    }

    init() {
        this.randomizeWidth()
        this.randomizePos()
        this.drawObstacle()
        this.move()
    }

    randomizeWidth() {
        const width = { min: 120, max: 200 }

        const result = Math.floor(width.min + Math.random() * width.max)
        return result
    }

    randomizePos() {
        const width = { min: 30, max: 300 }

        const result = Math.floor(width.min + Math.random() * width.max)
        return result
    }

    drawObstacle() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    move() {
        this.obstaclePos.y += 4
    }
}