class Obstacule {
    constructor(ctx, canvasSize, posX) {
        this.ctx = ctx,
            this.canvasSize = canvasSize
        this.obstaculeSpects = {
            size: { w: 150, h: 20 },
            pos: { x: posX, y: 0 },
            speed: 10
        }
        this.draw()
    }
    init() {
        this.draw()
    }
    draw() {
        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaculeSpects.pos.x, this.obstaculeSpects.pos.y, this.obstaculeSpects.size.w, this.obstaculeSpects.size.h)
    }
    move() {
        this.obstaculeSpects.pos.y += this.obstaculeSpects.speed
    }
}