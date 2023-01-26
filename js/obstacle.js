class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.obstacleSize = {
            w: Math.random() * (400 / 2 - 100) + 100,
            h: 30
        }

        this.obstaclePosition = {
            x: Math.random() * (this.canvasSize.w/2 - 60) + 60,
            y: 0
        }

        this.obstacleSpeed = 2
    }
    move(){
        this.obstaclePosition.y += this.obstacleSpeed
    }
    draw(){
        this.ctx.fillStyle = '#F9F871'
        this.ctx.fillRect(this.obstaclePosition.x, this.obstaclePosition.y, this.obstacleSize.w, this.obstacleSize.h)
    }
  
    }
  