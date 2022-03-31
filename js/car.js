class Car {
    constructor(ctx, posX, posY, width, gameSize) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: width * 2 }
        this.carImage = 'car.png'
        this.imageInstance = undefined
        this.gameSize = gameSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(direction) {

        if (direction == -1 && this.carPos.x + this.carSize.w / 2 > 70) {
            this.carPos.x -= 4
        }
        if (direction == 1 && this.carPos.x + this.carSize.w / 2 < this.gameSize.w - 70) {
            this.carPos.x += 4
        }
    }
}