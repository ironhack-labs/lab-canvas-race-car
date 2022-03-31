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
        this.move
        this.draw()
    }

    draw() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(Math.random() * this.blockSize.w, 0, Math.random() * 100 + 100, 40)
    }



    move() {
        this.blockPos.y += 100
    }
}