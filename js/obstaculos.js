class Obstaculos{
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.obstacuSize = {
            w: Math.random * 100,
            h:10   
        }
        this.obstacuPos = {
            x: 100 + (Math.random) * 100,
            y:0
        }
        this.canvasSize=canvasSize
    }

    drawObustaculos() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstacuPos.x, this.obstacuPos.y, this.obstacuSize.w, this.obstacuSize.h)
        this.move()
    }

    move() {
       this.obstacuPos.y+=10
   }
}

