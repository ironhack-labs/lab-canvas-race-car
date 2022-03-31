class Britney {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.britneyPos = {
            x: posX,
            y: posY
        }
        this.britneySize = {
            w: width,
            h: height
        }


        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/pngfind.com-britney-spears-png-694721.png'
        this.draw()
    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.britneyPos.x, this.britneyPos.y, this.britneySize.w, this.britneySize.h)

    }




}