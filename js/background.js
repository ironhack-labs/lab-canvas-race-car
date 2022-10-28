class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height

        this.backgroundImg = new Image()
        this.backgroundImg.src = "./images/road.png"

        this.obstacle = []
    }
    draw() {
        this.ctx.drawImage(this.backgroundImg, 0, 0, this.width, this.height)
    }

    setEventListeners() {
        document.addEventListener("keydown", (e) => {
            if (e.code === "space") {
                this.createObstacles()
            }
        })
    }

    createObstacles() {
        this.obstacle.push(new Obstacle((this.ctx, this.width, this.height)))
    }
}
