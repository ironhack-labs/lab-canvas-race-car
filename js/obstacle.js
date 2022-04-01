class Obstacle {


    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: height }
        this.gameSize = gameSize
        this.velocity = 1

        this.imageInstance = undefined

        this.init()
    }



    drawObstacle() {



    }
}