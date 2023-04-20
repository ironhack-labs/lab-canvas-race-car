class Obstacles {
    constructor(ctx, canvasSize, posX) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.obstaclesSpecs = {
            size: { w: 200, h: 30 },
            pos: { x: posX, y: 0 },

        }
        this.init()
    }
    init() {
        this.draw()
    }

    draw() {
        this.move()
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(50, 20, 200, 40)
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(250, 280, 200, 40)
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(250, 100, 200, 40)
        this.ctx.fillStyle = 'purple'
        this.ctx.fillRect(50, 200, 200, 40)

    }
    move() {

        this.obstaclesSpecs.pos.y++
    }
}