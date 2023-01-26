class Obstacles {
    constructor() {
        this.init()

    }
    init() {
        this.createObstacles()
    }
    createObstacles() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(80, 0, 300, 30)

    }
    moveObstacles() {
        this.createObstacles.y += this.speedObstacles
    }
}