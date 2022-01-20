class obstacle {
    constructor(ctx, posX, posY, speed, obstacleSize) {

        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSpeed = speed
        this.obstacleSize = obstacleSize

        this.init()
    }


    drawObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(65, 0, this.obstacleSize.w - 480, this.obstacleSize.h)




    }