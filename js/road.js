class Road {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height

        this.roadImg = new Image()
        this.roadImg.src = "./images/road.png"

        this.obstacles = []

    }
    draw(counter, points) {
        this.ctx.drawImage(this.roadImg, 0, 0, this.width, this.height)
        if (counter % 240 === 0) {
            this.setObstacles()
        }
        this.ctx.font = "25px arial";
        this.ctx.fillText("Score: " + points, 70, 30);
    }
    setObstacles() {
        this.obstacles.push(new Obstacle(this.ctx))
    }
}