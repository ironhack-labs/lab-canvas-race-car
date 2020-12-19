
class Obstacle{
    constructor (ctx, x, y, width){
        this.ctx = ctx
        this.x = x
        this.y = y
        
        this.height = 20
        this.width = width

        this.vy = 2
    }

    draw(){
        this.ctx.save()
        this.ctx.fillStyle = 'darkred'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.restore()
    }

    move(){
        this.y += this.vy
    }
}