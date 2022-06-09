class Obstacle {

    constructor(ctx, canvasSize, obstaclePosX, obstaclePosY, width) {
        this.ctx = ctx
        this.canvasSize = this.canvasSize
        if (Math.random() > 0.5) {
            this.obstaclePosX = 0

        }
        else {
            this.obstaclePosX = Math.random() * 500
        }
        this.obstaclePosY = obstaclePosY
        this.obstacleWidth = width
        this.obstacleHeight = 20
    }


    draw() {
        console.log(this.obstaclePosX, this.obstaclePosY, this.obstacleWidth, this.obstacleHeight)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePosX, this.obstaclePosY, this.obstacleWidth, this.obstacleHeight)
    }

    down() {
        this.obstaclePosY += 10
    }

}