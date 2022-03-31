class Obstacles {

    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.obstaclesPos = { x: Math.random() * (390 - 50) + 50, y: 0 }     //Math.floor(Math.random() * (max - min) ) + min
        this.obstaclesSize = { w: width, h: height }
        this.speed = speed
        this.gameSize = { w: 500, h: 700 }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.draw()
    }


    draw() {
        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(55, 0, this.gameSize.w - 220, 50)
    }

    move() {
        this.obstaclesPos.x += this.speed

        if (this.obstaclesPos.x >= this.gameSize.w - this.obstaclesSize.w) {
            this.turnAround()
        }

        if (this.obstaclesPos.x <= 0) {
            this.turnAround()
        }
    }

    turnAround() {
        this.speed *= -1
    }
}