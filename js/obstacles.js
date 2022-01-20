class Obstacle {
    constructor (ctx, posX, posY, width, height, speed) {
            this.ctx = ctx
            this.obstPos = { x: posX, y: posY }
            this.obstSize = { w: width, h: height }
            this.speed = speed
    
            this.init()
    }
    init() {
    }

    createObst() {
        this.obstacle = new Obstacle(this.ctx, this.randomX(), 0, 100, 100)
    }

    draw() {
        this.ctx.rect(this.ctx, this.obstPos.x, this.obstPos.y, this.obstSize.w, this.obstSize.h, this.speed)
    }
   
    move() {
        this.obstPos.y += 3

    }
}