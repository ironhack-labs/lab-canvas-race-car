class Player {
    constructor(ctx, ctxWidth, ctxHeight) {

        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight

        this.width = 50
        this.height = 100

        this.posX = ctxWidth / 2 - this.width / 2
        this.posY = ctxHeight - 50 - this.height

        this.playerImg = new Image()
        this.playerImg.src = "./images/car.png"

        this.setEventListeners()
    }

    draw() {
        this.ctx.drawImage(this.playerImg, this.posX, this.posY, this.width, this.height)
    }

    setEventListeners() {
        document.addEventListener("keydown", (e) => {
            if (e.code === "ArrowLeft") {
                if (this.posX > 55) this.posX -= 19
            }
            if (e.code === "ArrowRight") {
                if (this.posX < this.ctxWidth - this.width - 55)
                    this.posX += 19
            }
        })
    }


}