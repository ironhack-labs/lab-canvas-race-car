class Obstacles {
    constructor(ctx, posX, posY, width, heigth){
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: heigth }
        this.imageInstance= undefined

        this.init()
    }

    init() {
        
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    
   

}