class Obstacles {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.carPosition = { x: posX, y: posY }
        this.carSize = { w: width, h: height }

        this.imageInstance = undefined

        this.init()
    }

    init() {

    }

    drawObstacles() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.ctx, 100, 50, 100, 100)
        console.log(this.drawObstacles)
    }
}