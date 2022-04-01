class Obstacle {

    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: 10 }
        this.init()
    }

    init() {
        // this.width()
        // this.positionX()
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    // width() {
    //     this.obstacleSize.w = Math.floor(Math.random() * 350)
    // }
    // positionX() {
    //     this.obstaclePost.x = Math.floor(Math.random() * 350)
    // }




























}