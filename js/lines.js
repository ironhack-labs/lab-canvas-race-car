class Lines{
    constructor(ctx){
        this.ctx = ctx,
        this.height = 35,
        this.width= 15

    }

    draw(){
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect
            (
                this.ctx.canvas.width/2 - this.width/2,
                0,
                this.width,
                this.height
            )
    }
}