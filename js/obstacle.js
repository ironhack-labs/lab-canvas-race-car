class Obstacle {
    constructor(ctx, canvasSize, obstacleWidth, obstacleHeight, obstacleSpeed) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstacleSize = {
            w: 100,
            h: 100 //random paramentros
        }

        this.obstacleSpeed = obstacleSpeed

        this.obstaclePos = {
            x: 100, //random parametros
            y: 0,
        }


    }



    drawObstacle() {
        this.ctx.fillStyle('red')
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }
}