class Obstacles {
    constructor(ctx, canvasSize, width, xPosition) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstaclesSpecs = {
            width: width,
            xPosition: xPosition,
            yPosition: -50
        }
    }

    draw() {
        this.move()
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(this.obstaclesSpecs.xPosition, this.obstaclesSpecs.yPosition, this.obstaclesSpecs.width, 50)
    }

    move() {
        this.obstaclesSpecs.yPosition += 10
    }
}