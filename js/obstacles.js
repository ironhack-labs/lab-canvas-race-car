class obstacles {
    constructor(ctx, posX, posY, width, heigth, speed) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstaclesSize = { w: width, h: heigth }
        this.speed = speed
        this.imageInstance = undefined


        this.init()
    }

    init() {
        this.imageInstance = new Image()
    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstaclesSize.w, this.obstaclesSize.h)
    }

    move() {
        this.obstaclePos.y -= this.obstacleSpeed

    }

}

