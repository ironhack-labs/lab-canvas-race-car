class Obstacle{
    constructor(ctx){
        this.ctx = ctx
         this.canvasDimension = {
           w: 500,
           h: 700,
         };
         this.dimension = {
           w: 150,
           h: 20,
         };
        this.pos = {
            x: 0, 
            y: 0
        }
        this.frameCounter = 0
        this.frameReset = 10
        this.velocity = 40
        this.init()
    }
    init(){
       this.pos.x = this.randomInteger(63, this.canvasDimension.w/2)
       this.dimension.w = this.randomInteger(20, 255);
    }
    randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
    drawObstacle(){
        ++ this.frameCounter
        this.moveObstacle()
        this.ctx.fillRect(this.pos.x, this.pos.y, this.dimension.w, this.dimension.h)
    }
    moveObstacle(){
        if(this.frameCounter == this.frameReset){
            this.pos.y += this.velocity
            this.frameCounter = 0
        }
    }
}