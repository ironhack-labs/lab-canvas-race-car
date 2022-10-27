class Obstacle {

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
        this.canvasSize = canvasSize

    }

    draw() {
        this.ctx.fillStyle = 'purple'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)

    }

    move() {
        this.obstaclePos.y += 5
    }

}