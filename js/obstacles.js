class Obstacle {
    constructor(ctx, canvasSize, obstacleWidth, obstacleHeight, obstacleSpeed) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstacleSize = {
            w: obstacleWidth,
            h: obstacleHeight
        }

        this.obstacleSpeed = obstacleSpeed

        this.obstaclePos = { x: 70, y: 0 }
        this.init()

    }

    init() {
        this.createObstacles()
    }

    move() {
        this.obstaclePos.y += this.obstacleSpeed
    }

    createObstacles() {
        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(70, 30, 100, 30)
    }

}
