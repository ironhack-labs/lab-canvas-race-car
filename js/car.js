class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carSpeed, carImage) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carWidth * 2 }
        this.carImg = carImage
        this.imageInstance = undefined
        this.carSpeed = carSpeed


        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImg}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    moveLeft() {
        this.carPos.x -= 20
    }
    moveRight() {
        this.carPos.x += 20
    }
} 
