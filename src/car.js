class Car {
    constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight

        this.width = 120 // dibujar una imagen con estos valores
        this.height = 150

        this.posX = 120
        this.posY = ctxHeight - 50 - this.height // AQUÍ VOLVEMOS

        this.carImg = new Image()
        this.carImg.src = './assets/car.png'

        // gravity
        // velocity
        // keys

        // bullets...
        this.setEventListeners()
    }

    draw() {
        this.ctx.drawImage(this.carImg, this.posX, this.posY, this.width, this.height)
    }

    setEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowLeft') {
                if (this.posX > 0) this.posX -= 20
            }
            if (e.code === 'ArrowRight') {
                if (this.posX < this.ctxWidth - this.width) this.posX += 20
            }
        })
    }
}