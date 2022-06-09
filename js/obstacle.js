class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.obstaclePos = { x: 90, y: 0 }
        this.obstacleSize = { w: 20, h: 100 * 2 }

    }


    moveDown() {


        this.obstaclePos.y += 15



    }

    drawObstacles() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, 100, 30)



    }

}