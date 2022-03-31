class Obstacle {

    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: height }
        // this.obstaclePos = { x: (Math.random() * (this.gameSize.w - 100) + 100), y: 0 }
        // this.obstacleSize = { w: (Math.random() * (300 - 100) + 100), h: 100 }
        this.speed = speed

        this.init()
    }

    init() {
        // this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }


    move() {
        this.obstaclePos.y += 20

        //     if (this.camelPos.x >= this.gameSize.w - this.camelSize.w) {
        //         this.turnAround()
        //     }

        //     if (this.camelPos.x <= 0) {
        //         this.turnAround()
        //     }
    }
}
