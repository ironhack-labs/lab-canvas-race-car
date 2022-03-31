class Car {

    constructor(ctx, gameSize, posX, posY, width, height,speed) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.speed = speed



        this.imageInstance = undefined

        this.init()

    }


    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
        this.draw()



    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 10
    }

    moveRight() {
        this.carPos.x += 10
    }
    



}