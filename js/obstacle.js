class Obstacle {
    constructor(ctx, x, y, width) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = width

        this.height = 40

        this.vy = SPEED
    }

    draw() {
        this.ctx.save()
        this.ctx.fillStyle = '#870007'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.restore()
    }

    move() {
        this.y += this.vy
    }
}

const SPEED = 1