class Obstacle {
    constructor(ctx, speed, canvasSize) {
        this.ctx = ctx
        this.speed = speed
        this.canvasSize = canvasSize
        this.obstaclePos = { x: Math.random() * (this.canvasSize.w / 2), y: 0 }
        this.obstacleSize = { w: Math.random() * (this.canvasSize.w / 2), h: 30 }



        this.init()


    }

    draw() {

    }
}