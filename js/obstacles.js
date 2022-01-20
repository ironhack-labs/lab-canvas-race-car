class Obstacle {
    constructor(ctx, obsX, obsY, width, height) {
        this.ctx = ctx
        this.obsPos = { x: obsX, y: obsY }
        this.obsSize = { w: width, h: height }
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
}
