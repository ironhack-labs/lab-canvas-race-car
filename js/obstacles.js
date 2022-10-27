class Obtacles {
    constructor(ctx,ctxWhidth,ctxHeight) {
        this.ctx = ctx
        this.ctxWhidth= ctxWhidth
        this.ctxHeight= ctxHeight
        
        this.width= 70
        this.height=100

        this.posX=215
        this.posY= 590

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)

        this.setEventListeners()
    }
    draw(){
       this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        
    }
    

} 