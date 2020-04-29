class Obstacle {



    constructor(ctx, car, canvasSize) {

        this.ctx = ctx

        this.obstacleWidth = Math.floor(Math.random() * 100)
        this.obstacleHeight = 50

        this.obstacleY = 50
        this.obstacleX = Math.floor(Math.random() * ((400 - (this.obstacleWidth + 70)) + (this.obstacleWidth + 70)))

        this.obstacle = undefined

        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
    }

    drawObstacle() {

        this.ctx.strokeStyle = "red"
        this.ctx.lineWidth = this.obstacleHeight
        this.ctx.beginPath()
        this.ctx.moveTo(this.obstacleX, this.obstacleY)
        this.ctx.lineTo(this.obstacleWidth, this.obstacleY)
        this.ctx.stroke()
    }

    moveObstacle() {
        this.obstacleY++
    }

    isRemovable() {

        return !(this.obstacleY + this.obstacleHeight < this.canvasSize.height)
    }
}