class Obstacle {
    constructor (ctx, posX, posY, width, height) {
            this.ctx = ctx
            this.obstPos = { x: posX, y: posY }
            this.obstSize = { w: width, h: height }
            this.imageInstance = undefined

    
            this.init()
    }
    init() {
    }

    randomX() {

    }

    createObst() {
        this.obstacle = new Obstacle(this.ctx, this.randomX(), this.obstSize.h, 0, 0)
    }

    drawObst() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'red'

        this.ctx.beginPath()
        // this.ctx.moveTo(100, 200)
        // this.ctx.lineTo(this.gameSize.w - 100, 200)
        this.ctx.stroke()
        this.ctx.closePath()
    }
   
}