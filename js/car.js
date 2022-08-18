class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
        this.ctx = ctx

        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImage
        this.init()
    }

    // Image Creation

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./images/car.png"

    }

    // Car Painting

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    //  Car Moving Left

    moveLeft() {
        if (this.carPos.x > 2) {
            this.carPos.x -= 20
        }

    }

    // Car Moving right

    moveRight() {
        if (this.carPos.x < 430) {
            this.carPos.x += 20
        }

    }

    // Car Moving Up

    moveUp() {
        if (this.carPos.y > 1) {
            this.carPos.y -= 20
        }

    }

    // Car Moving Down 

    moveDown() {
        if (this.carPos.y < 600)
            this.carPos.y += 20
    }
}