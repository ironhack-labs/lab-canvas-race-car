class Car {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.speed = 50
        this.imageInstance = undefined
        this.size = { w: 50, h: 100 }
        this.Carimg = 'images/car.png'
        this.canvasSize = this.canvasSize

        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.Carimg
    }
    draw() {

        this.ctx.drawImage(this.imageInstance, this.posX, this.posY, this.size.w, this.size.h)
    }
    moveLeft() {
        
        this.posX -= 10
        
    }
    moveRight() {
        this.posX += 10
    }

}
