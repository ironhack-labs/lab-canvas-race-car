class Obstacles {
    constructor(ctx, canvasSize, obsInstance, width, xPosition) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obsInstance = obsInstance
        this.obstaclesSpecs = {
            width: width,
            height: 50,
            xPosition: xPosition,
            yPosition: -50
        }
    }

    draw() {
        this.move()
        this.ctx.drawImage(
            this.obsInstance,
            this.obstaclesSpecs.xPosition,
            this.obstaclesSpecs.yPosition,
            this.obstaclesSpecs.width,
            this.obstaclesSpecs.height)
    }

    move() {
        this.obstaclesSpecs.yPosition += 10
    }
}