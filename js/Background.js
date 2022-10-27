class Background {
    constructor(ctx,width,height){
        this.ctx = ctx
        this.width = width
        this.height= height

        this.backgroundImg= new Image()
        this.backgroundImg.src= "../images/road.png"
    }
    draw(){
        this.ctx.drawImage(this.backgroundImg, 0, 0, this.width, this.height)
    }
}