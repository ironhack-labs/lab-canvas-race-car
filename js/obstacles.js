class obstacle {

    constructor(ctx, obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight, obstacleSpeed, canvasSize) {
        this.ctx = ctx
        this.obstacleSize = {
            w: obstacleWidth,
            h: obstacleHeight
        }
        this.obstaclePos = {
            x: obstaclePosX,
            y: obstaclePosY
        }
        this.obstacleSpeed = obstacleSpeed
        this.obstacleInstance = undefined
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.obstacleSize = new Size()
        this.obstacleSize = { w: 200, y: 50 }
    }

    draw() {
        this.ctx.drawObstacle(
            this.obstacleInstance,

        )
    }

}