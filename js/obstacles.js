class Obstacles {

    constructor(ctx, posX, posY, width, speed, canvasSize) {

        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: width * .8 }
        this.obstacleImg = 'images/Obstacle2.PNG'
        this.imageInstance = undefined
        this.obstacleSpeed = speed
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.obstacleImg
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    move() {
        this.obstaclePos.y += this.obstacleSpeed
    }
}