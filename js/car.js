class Car {

    constructor(ctx, posX, posY, width,) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: width  }  
        this.imageInstance = undefined
        

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
        this.carPos.x -= 6
    }

    moveRight() {
        this.carPos.x += 6
    }
}
