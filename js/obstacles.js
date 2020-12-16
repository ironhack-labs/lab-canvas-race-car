class Obstacles{
    constructor(ctx, x, y, width){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = width
        this.height = 30

        this.vy = -8
    }

    draw(){
        this.ctx.save()
        this.ctx.fillStyle = '#890000'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    move(){
        this.y -= this.vy
    }
}