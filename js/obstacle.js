class obstacle{
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: height }

        
    }

    draw() {
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y,this.obstacleSize.w,this.obstacleSize.h)
        this.fall()
    }

    fall(){
        this.obstaclePos.y += 2
    }

   
}