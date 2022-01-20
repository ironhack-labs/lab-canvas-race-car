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
        this.carPos.x -= 2
        this.checkCollision()
    }

    moveRight() {
        this.carPos.x += 2
        this.checkCollision()
    }

    checkCollision() {
        if (this.carPos.x >= this.gameSize.w - this.carSize.w || this.carPos.x <= 0) {
            this.turn()
        }
    }

    turn() {
        this.carPos *= -1
    }
}