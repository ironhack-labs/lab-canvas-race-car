class Car {
    constructor(ctx, posX, posY, width, height, gameSize) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.imageInstance = undefined
        this.gameSize = gameSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 20
    }

    moveRight() {
        this.carPos.x += 20
    }
}