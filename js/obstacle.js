class Obstacle {
    constructor(ctx, obstaclePosX, obstaclePosY,
        obstacleWidth, obstacleHeight, obstacleSpeed, canvasSize) {
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

        this.init()
    }

    init() {
        this.drawObstacle()
        this.setDimensions()
        this.setContext()
    }

    setDimensions() {
        this.obstacleSize = {
            w: Math.floor() * 500,
            h: 100
        }

    }

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    }

    drawObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(Math.floor(this.obstaclePosX) * 500, 0, Math.floor(this.obstacleWidth) * 500, this.obstacleHeight)
        console.log('obstaculos')
    }

    move() {

        if (this.obstaclePos.x >= this.obstacleSize.w - this.obstacleSize.w) {
            this.obstacleSpeed *= -1
        }

        if (this.obstaclePos.x < 0) {
            this.obstacleSpeed *= -1
        }

        this.obstaclePos.x += this.obstacleSpeed
    }

}
