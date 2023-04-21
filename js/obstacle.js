class Obstacle {
    constructor(ctx, canvasSize, posy, size, speed) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstacleSpecs = {
            size: { w: size, h: size },
            pos: { x: 0, y: posy },
            speed: speed
        }
        this.init()
    }
    init() {
        this.draw()
        this.move()

    }
    draw() {
        this.move()
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(80, 460, 180, 50)
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(300, 250, 150, 50)
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(70, 50, 120, 50)
    }
    move() {
        this.obstacleSpecs.pos.y += this.obstacleSpecs.speed
    }
}