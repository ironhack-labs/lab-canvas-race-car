
class obstacles {

    constructor (ctx, posX, posY, width, gameSize, speed) {

     this.ctx= ctx
     this.obstaclePos = { x: posX, y: posY }
     this.obstacleSize = { w: width, h: width * .5 }
     this.imageInstance = undefined
     this.gameSize = gameSize
     this.speed = 15

     this.init()

    }

    init(){

        this.createObstacles()
        this.move()

    }

    createObstacles(){

        this.draw()

    }

    draw(){

        
        this.ctx.fillStyle = 'purple'
        this.ctx.fillRect(100, 100, 170, 80)
    
        

    }

    move() {
        this.obstaclePos.y += this.speed
        
    }
   

}