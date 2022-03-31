class Block {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.blockPos = {
            x: posX,
            y: posY
        }
        this.blockSize = {
            w: width,
            h: height
        }


        this.init()
    }

    init() {

        this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.blockPos.x, this.blockPos.y, this.blockSize.w, this.blockSize.h)
    }



    move() {
        this.blockPos.y += 5
    }
}