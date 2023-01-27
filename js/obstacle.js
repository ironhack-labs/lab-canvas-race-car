class Obstacle {

    constructor(ctx) {
        this.ctx = ctx

        this.obstacleSize = {
            w: 100,
            h: 100
        }
        this.obstacleSpeed = 9

        this.obstaclePos = { x: 10, y: 7 }
    }

    createObstacle() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(50, 20, 200, 20)
    }

    move() {
        this.obstaclePos.y += this.obstacleSpeed
    }
    draw() {
        this.move()
        this.createObstacle()
    }
}