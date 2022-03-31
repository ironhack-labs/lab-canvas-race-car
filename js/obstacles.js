class Block {

    constructor(ctx, gameSize, posX, posY, width, height) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.pos = { x: posX, y: posY }
        this.Size = { w: width, h: height }
        this.init()
    }
    init() {
        this.drawBlock()
    }
    drawBlock() {
        this.ctx.fillStyle = "red"
        console.log(this.ctx.fillRect(this.pos.x, this.pos.y, this.Size.w, this.Size.h))

    }
    moveDown() {

        this.pos.y = this.pos.y + 5

    }


}