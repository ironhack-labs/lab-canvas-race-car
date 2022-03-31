class obstacles {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.obPos = { x: posX, y: posY }
        this.obSize = { w: width, h: height }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/ball.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    moveLeft() {
        this.ballPos.x -= 5
    }

    moveRight() {
        this.ballPos.x += 5
    }

}