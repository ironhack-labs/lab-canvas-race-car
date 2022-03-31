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

    move() {
        if (this.britneyPos.x <= 400 && this.britneyPos.y <= 700) {
            this.britneyPos.x += 0.5
            this.britneyPos.y += 0.5
        }
        // if (this.britneyPos.x = 400 || this.britneyPos.y >= 700) {
        //     this.speed = this.speed * -1
        // }
    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.britneyPos.x, this.britneyPos.y, this.britneySize.w, this.britneySize.h)

    }




}