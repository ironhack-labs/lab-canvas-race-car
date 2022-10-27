class Car {
    constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        this.width = 79
        this.height = 159.5
        this.posX = ctxWidth / 2 - this.width / 2
        this.posY = ctxHeight - 30 - this.height
        this.carImage = new Image()
        this.carImage.src = "./images/car.png"
        this.setEventListeners()
    }
    draw() {
        this.ctx.drawImage(this.carImage, this.posX, this.posY, this.width, this.height)
    }
    setEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowLeft') {
                if (this.posX > 60) this.posX -= 20
            }
            if (e.code === 'ArrowRight') {
                if (this.posX < this.ctxWidth - this.width - 60) this.posX += 20
            }

        })
    }

}