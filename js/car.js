class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.imageInstance = undefined

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
    moveRigth() {
        this.carPos.x += 10
    }
    moveUp() {
        this.carPos.y -= 10
    }
    moveDown() {
        this.carPos.y += 10
    }

}