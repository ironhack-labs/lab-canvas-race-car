class Obstacle {
    constructor (ctx, canvasSize){
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.obstacleSize = {
            w: Math.random()*(200-100)+100,
            h: 30,
        }
        this.obstacleSpeed = 3;
        this.obstaclePosition = {
            x: Math.random()*(canvasSize.w/2 - 60),
            y: 0
        }
    }
    drawObstacle() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.obstaclePosition.x, this.obstaclePosition.y, this.obstacleSize.w, this.obstacleSize.h)
    }
    move() {
        this.obstaclePosition.y += this.obstacleSpeed
    }
}