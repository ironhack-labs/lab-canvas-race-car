class Obtacles {
    constructor(ctx,ctxWhidth,ctxHeight) {
        this.ctx = ctx
        this.ctxWhidth= ctxWhidth
        this.ctxHeight= ctxHeight
        
        this.width= 50 + Math.floor(Math.random() * 150)
        this.height=20
        this.posX=Math.floor(Math.random() * 400)
        this.posY= 0

        this.ctx.fillStyle = 'red'
        

     
    }
    draw(){
       this.ctx.fillRect(this.posX, this.posY+=5, this.width, this.height)
        
    }

    

} 