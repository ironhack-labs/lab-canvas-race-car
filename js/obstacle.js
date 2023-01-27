class obstacle {
    constructor(ctx, canvasSize, obstacleWidth, obstacleHeigth, obstacleSpeed,) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstacleSize = {
            w: obstacleWidth,
            h: obstacleHeigth
        }

        this.obstacleSpeed = obstacleSpeed

        this.obstaclePosition = { x: 0, y: this.canvasSize.h - this.obstacleSize.h }

        this.init()
    }

    init() {
        this.ctx.fillStyle = 'pink'
        this.ctx.fillRect(200, 0, 400, 40)
    }

}