class Score {
    constructor(ctx,ctxWhidth,ctxHeight,score) {
        this.ctx = ctx
        this.ctxWhidth= ctxWhidth
        this.ctxHeight= ctxHeight
        this.score = score
        this.text="Score: "+score
        
        this.width= 60
        this.height=90

        this.posX=0
        this.posY=600

   
    }
    draw(){
        //this.ctx.fillStyle("withe") ;
        this.ctx.font = '20px serif';
        this.ctx.fillText(this.text, 10, 50);
    }
    addSecore(){
        this.score+10
    }
}