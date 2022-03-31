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
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, 50, 100)
    }

    moveLeft() {
        this.carPos.x -= 30
    }

    moveRight() {
        this.carPos.x += 30
    }
}
