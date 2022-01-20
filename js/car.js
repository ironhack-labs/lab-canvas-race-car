class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.CarPos = { x: posX, y: posY }
        this.CarSize = { w: width, h: height }
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.CarPos.x, this.CarPos.y, this.CarSize.w, this.CarSize.h)
    }
    
    moveLeft() {
        this.CarPos.x -= 2
    }

    moveRight() {
        this.CarPos.x += 2
    }

}