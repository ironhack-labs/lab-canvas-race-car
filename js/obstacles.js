class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.obstaclePos = { x: undefined, y: 0 }
        this.obstacleSize = { w: undefined, h: 20 }
        this.initObstacle()
    }

    initObstacle() {
        this.createRandomSize()
        this.createRandomPosition()
        this.drawObstacle()
        this.moveObstacleDown()
    }

    // 1 pendiente definir el tamano de los obstáculos
    //  createRandomSize() {
    //     this.obstacleSize.w = Math.floor(Math.random() * ( - ) + )
    // }

    // 2 pendiente definir la posición de los obstáculos
    // createRandomPosition() {
    //     this.obstaclePos.x = Math.floor(Math.random() * ( - ) + )
    // }

    drawObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }
    // pendiente mover los obstáculos hacia abajo
    // moveObstacleDown() {
    //   this.obstaclePos.y +=
    // }
}