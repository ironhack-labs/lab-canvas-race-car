class Obstacle {

    constructor(ctx, posX, posY, width, speed, canvasSize) {
        this.ctx = ctx
        this.obstaclePos = { x: posX + 42.5, y: posY = -10 }
        this.obstacleSize = { w: width, h: 10 }
        this.obstacleSpeed = speed
        this.canvasSize = canvasSize

    }



    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
        
    }

    move() {
        this.obstaclePos.y += this.obstacleSpeed
    }

}