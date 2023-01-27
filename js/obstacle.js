class Obstacle {

    constructor(ctx, obsPosX, obsPosX, obsWidth, obsHeight, obsSpeed) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obsSize = { w: obsWidth, h: obsHeight }
        this.obsSpeed = obsSpeed
        this.obsPosX = obsPosX
        this.obsPosY = obsPosY
        this.generateObstacle = generateObstacle
        this.init()

    }

    init() {
        this.Obstacle()
        this.generateObstacle()
    }

    generateObstacle() {
        console.log('OBSTACULO')
        this.ctx.fillStyle = '#870007'
        this.ctx.fillRect(obsPos.x, obsPos.y, 300, 100)
    }

    moveObstacle() {
        this.obsPos.y += this.obsSpeed
    }

    drawObstacle() {
        this.ctx.fillStyle = '#870007'
        this.ctx.fillRect(obsPos.x, obsPos.y, 300, 100)
    }
}