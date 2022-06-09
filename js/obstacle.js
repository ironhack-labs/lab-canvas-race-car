class Obstacle {
    constructor(ctx, obsPosX, obsPosY, obsWidth, obsHeight, obstacleShape) {
        this.ctx = ctx
        this.obsPos = { x: obsPosX, y: obsPosY }
        this.obsSize = { w: obsWidth, h: obsHeight }
        this.obsShape = obstacleShape

    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(250, 80, 150, 40)
    }
}