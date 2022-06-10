class Obstacle {

    constructor(ctx, obstaclePosX, obstaclePosY, width, canvasSize) {

        this.ctx = ctx
        this.obstaclePos = { x: obstaclePosX, y: obstaclePosY }
        this.obstacleSize = { w: width, h: width * 2 }
        this.canvasSize = canvasSize
        this.draw()
    }

    draw() {

        this.ctx.fillStyle = 'red'
        console.log("Aqui debe salir los obstaculos!!!")
        //this.ctx.Obstacle(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)


    }

    randomObstacle() {

        const randomObs = Math.random() * this.draw
    }


}