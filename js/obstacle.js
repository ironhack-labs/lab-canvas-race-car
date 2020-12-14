class Obstacle{

    constructor(ctx,x,y,width){
        this.ctx=ctx
        this.x=x
        this.y=y
        this.heigth= 50
        this.width= width

        this.vy= 4
    }

    draw(){
        this.ctx.save()
        this.ctx.fillStyle = '#800'
        this.ctx.fillRect(this.x,this.y,this.width,this.heigth)
        this.ctx.restore()
    }

    move(){
        this.y+=this.vy
    }

    
}