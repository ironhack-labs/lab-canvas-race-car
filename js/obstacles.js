class obstacles {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.obPos = { x: posX, y: posY }
        this.obSize = { w: width, h: height }

        this.imageInstance = undefined

        this.init()
    }

    init() {

    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.obPos.x, this.obPos.y, this.obSize.w, this.obSize.h)
    }

    moveLeft() {
        this.obPos.x -= 5
    }

    moveRight() {
        this.obPos.x += 5
    }

}