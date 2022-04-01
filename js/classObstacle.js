class Obstacle {
    constructor(ctx, posX, posY, obsWidth, obsHeight) {
        this.ctx = ctx
        this.obsPosition = { x: posX, y: posY }
        this.obsSize = { width: obsWidth, heigth: obsHeight }
        this.imageInstance = undefined
        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    drawObstacle() {
        this.move()
        //this.ctx.drawImage(this.imageInstance, this.obsPosition.x, this.obsPosition.y, this.obsSize.width, this.obsSize.height)
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.obsPosition.x, this.obsPosition.y, this.obsSize.width, this.obsSize.heigth)
    }

    move() {
        this.obsPosition.y += 10
    }
}
