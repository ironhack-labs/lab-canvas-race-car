class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstaclePos = {
            x: (Math.random() * (this.canvasSize.width / 2 - 60) + 60),
            y: 0,
        }
        this.obstacleSize = {
            x: Math.random() * (300 - 150) + 150,
            y: 30
        }
        this.generateObstacle()
    }
    generateObstacle() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.x, this.obstacleSize.y)
    }
    move() {
        this.obstaclePos.y += 15
    }

}