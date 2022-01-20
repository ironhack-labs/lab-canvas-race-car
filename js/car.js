class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.imageInstance = undefined

        this.initCar()
    }

    initCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        if (this.carPos.x >= 70) {
            this.carPos.x -= 15
        }
    }

    moveRight() {
        if (this.carPos.x <= 360) {
            this.carPos.x += 15
        }
    }



    // if(rect1.x <rect2.x + rect2.width &&
    //     rect1.x + rect1.width > rect2.x &&
    //     rect1.y < rect2.y + rect2.height &&
    //     rect1.height + rect1.y > rect2.y) {
    // // ¡colision detectada!
}


