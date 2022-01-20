class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.obstaclePos = { x: undefined, y: 0 }
        this.obstacleSize = { w: undefined, h: 15 }

        this.initObstacle()
    }

    initObstacle() {
        this.setRandomWeigth()
        this.setRandomPosition()
        this.draw()
        this.moveDown()
    }

    setRandomWeigth() {
        this.obstacleSize.w = Math.floor(Math.random() * (200 - 80) + 80)
    }

    setRandomPosition() {
        this.obstaclePos.x = Math.floor(Math.random() * (220 - 0) + 0)
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    moveDown() {
        this.obstaclePos.y += 5
    }

}