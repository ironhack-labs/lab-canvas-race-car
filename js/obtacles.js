class stone {

    constructor(ctx, posX) {
        this.ctx = ctx
        this.stonePos = { x: undefined, y: 0 }
        this.stoneSize = { w: width, h: undefined }
        

        
    }

    init() {
        

        
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
    }

    move() {
        this.camelPos.x += this.camelSpeed
        this.checkCollision()
    }

    checkCollision() {
        if (this.camelPos.x >= this.gameSize.w - this.camelSize.w || this.camelPos.x <= 0) {
            this.turn()
        }
    }

    turn() {
        this.camelSpeed *= -1
    }
}