class Car {
    constructor(ctx, posX, posY, width, gameSize) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: width * 1.25 }

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
        this.carPos.x -= 10
    }

    moveRight() {
        this.carPos.x += 10
    }



}