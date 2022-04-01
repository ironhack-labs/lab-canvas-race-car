class Car {
    constructor(ctx, gameSize, posX, posY, width, height) {

        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.gameSize = gameSize

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        //this.imageInstance.onload = () =>
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)

    }

    moveLeft() {
        this.carPos.x -= 35
    }

    moveRight() {
        this.carPos.x += 35
    }

}