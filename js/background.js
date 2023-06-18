class Background {
    constructor(ctx) {
        this.ctx = ctx
    }
    draw() {
        //Green line
        this.ctx.fillStyle ='green'
        this.ctx.fillRect
            (
                0,
                0,
                50,
                this.ctx.canvas.height
            )
        this.ctx.fillRect
            (
                this.ctx.canvas.width-50,
                0,
                50,
                this.ctx.canvas.height
            )
        this.ctx.fillStyle ='white'
        this.ctx.fillRect
            (
                70,
                0,
                20,
                this.ctx.canvas.height
            )
        this.ctx.fillRect
            (
                this.ctx.canvas.width-70,
                0,
                20,
                this.ctx.canvas.height
            )
    }
        //White line continiu
    
        
}