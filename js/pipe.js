class Pipe {
    constructor(ctx, x, y, width, color) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.color = color
        
        this.width = width
        this.height = 40

        this.vy = 1
    }

    draw() {
        this.ctx.save()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.restore()
    }

    move() {
        this.y += this.vy
    }
}