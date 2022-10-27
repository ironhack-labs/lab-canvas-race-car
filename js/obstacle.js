class Obstacle {

    constructor(ctx) {
        this.ctx = ctx
        this.obstacleSize = {
            w: 80 + Math.random() * 250,
            h: 30
        }
        this.obstaclePos = {
            x: Math.random() * 300,
            y: 0
        }
        
        this.init()
    }

    init() {
        this.drawObstacle()
    }
    
    drawObstacle() {
    
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
        // console.log('prueba')
        this.move() 
    }

    move() {
        
        this.obstaclePos.y += 7
    }
}