class Car {
    constructor(ctx, carPosx, carPosy, carWidth, carHeight, canvasSize) {
        this.ctx = ctx
        this.carPos = { x: carPosx, y: carPosy }
        this.carSize = { w: carWidth, h: carHeight }
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
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {

        if (this.carPos.x < 35 || this.carPos.x < 0) {
            this.carPos.x
        } else {

            this.carPos.x -= 10
        }


    }

    moveRight() {
        if (this.carPos.x >= this.canvasSize.w - (35 + this.carSize.w) || this.carPos.x < 0) {
            this.carPos.x
        } else {

            this.carPos.x += 10
        }
    }

    moveUp() {
        this.carPos.y -= 10
    }
    moveDown() {
        this.carPos.y += 10
    }
}