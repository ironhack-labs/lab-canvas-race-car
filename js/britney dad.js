class Dad {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.dadPos = {
            x: posX,
            y: posY
        }
        this.dadSize = {
            w: width,
            h: height
        }


        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/pngwing.com.png'
        this.draw()
    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.dadPos.x, this.dadPos.y, this.dadSize.w, this.dadSize.h)

    }



}