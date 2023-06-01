class Background{
    constructor(ctx, greenWidth, greyWidth, whiteWidth){
        this.ctx = ctx,
        this.greenWidth = greenWidth,
        this.greyWidth = greyWidth,
        this.whiteWidth = whiteWidth
    }
    draw(){
        //Green line
        this.ctx.fillRect(0,0,this.greenWidth,ctx.canva.heigth)
    }
}