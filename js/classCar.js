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
        this.imageInstance.src = 'images/bolido.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() { this.carPos.x > 10 ? this.carPos.x -= 25 : null }

    moveRight() { this.carPos.x < 390 ? this.carPos.x += 25 : null }

    moveDown() { this.carPos.y < 600 ? this.carPos.y += 25 : null }

    moveUp() { this.carPos.y > 10 ? this.carPos.y -= 25 : null }
}