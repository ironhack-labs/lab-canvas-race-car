class Box {




    constructor(ctx, gameSize, posX, posY, width, height, speed,color) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.boxPos = { x: posX, y: posY }
        this.boxSize = { w: width, h: height }
        this.speed = speed
        this.color=color
        


        this.init()
    }

    init() {

       
        this.draw()



    }

    draw() {
        this.move();
        this.ctx.fillStyle = this.color
        // let ran = Math.random() * (this.gameSize.w - 100) + 100;
        this.ctx.fillRect(this.boxPos.x, this.boxPos.y, this.boxSize.w, this.boxSize.h)


    }

    move() {    
        this.boxPos.y += this.speed

        if (this.boxPos.y >= this.gameSize.y - this.boxSize.y) {
            this.turnAround()
        }

        if (this.boxPos.y <= 0) {
            this.turnAround()
        }
    }

    turnAround() {
        this.speed *= -1
    }
}