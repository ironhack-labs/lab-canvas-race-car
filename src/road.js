class Road {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height

        this.roadImg = new Image()
        this.roadImg.src = './assets/road.png'

        this.obstacles = []
        this.throwObstacle()
    }

    draw() {
        this.ctx.drawImage(this.roadImg, 0, 0, this.width, this.height)
    }

    throwObstacle() {
        this.intervalIdTwo = setInterval(() => {
            this.obstacles.push(new Obstacle(this.ctx, this.posX, this.posY, this.width, this.height))
        }, 3000)
    }
}