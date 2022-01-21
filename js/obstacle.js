class Obstacle {
    constructor(ctx, posX, posY, width,speed) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: width  }  
        
        

        this.init()
    }
}