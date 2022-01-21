class obstacles {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.obstaclesPos = { x: posX, y: posY }
        this.obstaclesSize = { w: width, h: height }
        this.speed = speed
        

        this.init()
    }

}