class obstacle {



    constructor(ctx, posX, posY, speed) {

        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.speed = speed
        this.weith = 110
        this.high = 27
    }

    drawObstacles() {
        console.log(this.posX, this.posY, 110, 27)
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(this.posX, this.posY, this.weith, this.high)
    }
    move(){
        this.posY += 5
    }
}