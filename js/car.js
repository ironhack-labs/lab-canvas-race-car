class Car {

    constructor(ctx, carPosX, carPosY) {
        this.ctx = ctx
        this.carPosX = carPosX
        this.carPosY = carPosY
        // this.carSize = { w: , h: 100px }
        this.carImg = 'images/car.png'
        this.imageInstance = undefined
        this.carSpeed = 50
        this.carWidth = 70
        this.carHeight = 140
        this.canvasSize = this.canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carImg
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPosX, this.carPosY, this.carWidth, this.carHeight)
    }

    moveLeft() {
        this.carPosX -= 10
    }

    moveRight() {
        this.carPosX += 10
    }
    moveUp() {
        this.carPosY -= 10
    }

    moveDown() {
        this.carPosY += 10
    }

    // turnAround() {
    //     METE POR SI AMPLÍO A BORDES
    // }
}