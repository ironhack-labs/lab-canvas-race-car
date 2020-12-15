class Obstacle {
    constructor(ctx, x, y, width) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = width
        this.height = 40
        this.vy = Speed
    }
    draw() {
        this.ctx.save()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    move() {
        this.y += this.vy
    }

}

const Speed = 3