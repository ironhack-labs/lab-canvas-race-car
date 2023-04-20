class Car {
    constructor(ctx, canvasSize, position, size, speed) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.position = position
        this.size = size
        this.speed = speed
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'

        document.onkeydown = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.position.x -= 10
            }

            if (key == 'ArrowRight') {
                this.position.x += 10
            }
            this.draw()
        }
    }
    draw() {

        this.ctx.drawImage(this.imageInstance,
            this.position.x,
            this.position.y, this.size.width, this.size.heigth)
    }

}
