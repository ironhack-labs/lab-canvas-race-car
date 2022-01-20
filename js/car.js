class Car {

    constructor(ctx, carPosX, carPosY, carHeight, carSpeed, gameSize) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carHeight * .45, h: carHeight }
        this.gameSize = gameSize
        this.speed = carSpeed

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveRight() {
        this.carPos.x += this.speed
    }

    moveLeft() {
        this.carPos.x -= this.speed
    }


}
