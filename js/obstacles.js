class Obstacles {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.obsPos = { x: posX, y: posY }
        this.obsSize = { w: width, h: height }
        this.imageInstance = undefined
        this.obsSpeed = 10
        this.init()
    }
    init() {
        this.createObstacles()
        this.move()
    }

    createObstacles() {
        this.draw()

    }



    draw() {
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(100, 100, 170, 80)

    }
    move() {
        this.obsPos.y += this.obsSpeed
        // this.checkCollision()
    }


}