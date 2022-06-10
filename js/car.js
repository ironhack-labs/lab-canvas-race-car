class Car {

    constructor(ctx, carPosX, carPosY, width, canvasSize) {

        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: width, h: width * 2 }
        this.carImg = 'images/car.png'
        this.imageInstance = undefined
        this.canvasSize = canvasSize

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carImg

    }

    draw() {
        this.moveLeft()
        this.moveRight()
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    //All Moves
    moveLeft() {
        if (this.carPos.x < 70) {
            this.carPos.x = 70
        }
        this.carPos.x -= 20
    }

    moveRight() {
        if (this.carPos.x > 260) {
            this.carPos.x = 260
        }
        this.carPos.x += 20
    }

}