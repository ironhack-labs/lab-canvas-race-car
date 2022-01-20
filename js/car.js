class Car {
    constructor(ctx, posX, posY, width, heigth) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: heigth }
        this.carImage = 'car.png'
        this.imageInstance = undefined
       
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    moveLeft() {
        this.carPos.x -= 50
    }
    moveRight() {
        this.carPos.x += 50
    }
}
