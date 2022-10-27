class Obstacle {
    constructor(ctx, obstaclePosx, obstaclePosy, obstacleWidth, obstacleHeight, obstacleSpeed, canvasSize) {
        this.ctx = ctx
        this.obstacleHeight.Size = {
            w: obstacleWidth,
            h: obstacleHeight
        }
        this.obstaclePos = {
            x: obstaclePosx,
            y: obstaclePosy
        }
        this.obstacleSpeed = obstacleSpeed
        this.canvasSize = canvasSize

        this.init()
    }
    init
}