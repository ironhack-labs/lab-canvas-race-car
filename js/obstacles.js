class Obstacle {

    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: height }
       

        this.init()
    }

    init() {
        this.setRandomWeight()
        this.setRandomPosition()
        this.draw()
        this.move()
    }

    setRandomWeight(){
        this.obstacleSize.w = Math.floor(Math.random() * (200-80) +80)
    }
    
    setRandomPosition() {
        this.obstaclePos.x = Math.floor(Math.random() * (220-0) + 0)

    }
    
    draw(){

        this.ctx.fillStyle ='red'
        this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
    }
          
    move() {
        
        this.obstaclePos.y += 5

    }

    
}