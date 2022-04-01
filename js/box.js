class Box{
    constructor(ctx, gameSize, posX, posY, width, height){
        this.ctx=ctx
        this.gameSize
        this.posCar={x:posX, y:posY}
        this.carSize={w: width, h:height}
        this.imageInstance=undefined
        this.init()
    }
    init(){
        this.drawBox()
    }
    drawBox(){
        this.ctx.fillStyle='green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    }
}