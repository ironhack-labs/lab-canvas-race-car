class Obstacles {
    constructor(ctx, x) {
        this.ctx = ctx

        this.x = x
        this.y = 0

        this.vy = 5

        this.width = 100
        this.height = 50
    }

    draw(){
        this.ctx.save()

        this.ctx.fillStyle = 'pink'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)

        this.ctx.restore()
    }

    move() {
        this.y += this.vy
    }
}