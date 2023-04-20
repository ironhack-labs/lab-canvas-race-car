class Block {
    constructor(ctx, canvaSize, posX, posY, sizeW, sizeH, speed) {
        this.ctx = ctx
        this.canvaSize =canvaSize
        this.obstaclesSpecs = {
            pos: { x: posX, y: posY},
            size :{ w: sizeW, h: sizeH},
            speed : speed
            
        }
        this.init()
    }
    init() {
        this.draw()
    }

    draw(){
        this.move()
        
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(160, 320, 300, 60)
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(390, 270, 140, 90)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 30, 140, 60)
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(140, 400, 140, 60) 

        // this.obstaclesSpecs.pos.x,
        // this.obstaclesSpecs.pos.y,
        // this.obstaclesSpecs.size.w,
        // this.obstaclesSpecs.size.h
    }
        // this.ctx.popino(
        
        // )
        
    // this.ctx.fillStyle = 'black'
    // this.ctx.fillRect(160, 0, 300, 60)
    // this.ctx.fillStyle = 'blue'
    // this.ctx.fillRect(300, 0, 140, 90)
    // this.ctx.fillStyle = 'red'
    // this.ctx.fillRect(100, 0, 140, 60)
    // this.ctx.fillStyle = 'yellow'
    // this.ctx.fillRect(140, 0, 140, 60) 
move(){
    // this.obstaclesSpecs.pos.posY *= 20
    // this.obstaclesSpecs.speed *= 1
      this.obstaclesSpecs.pos.y += this.obstaclesSpecs.speed
}
   
}