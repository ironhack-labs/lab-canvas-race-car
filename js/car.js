class car {
    constructor(ctx, posX, posY, width, speed, canvasSize) {
        this.ctx = ctx
        this.carPos = { x: 225, y: 580 }
        this.carSize = {w: 50, h: 100}
        this.carImage = "images/car.png"
        this.imageInstance = undefined
        this.carSpeed = speed
        this.canvasSize = canvasSize

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carImage
    }

    draw(){
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft(){
        this.carPos.x -=35
        if(this.carPos.x<=40){
            this.carPos.x = 50
        }
        
    }

    moveRight(){
        this.carPos.x +=35
        if (this.carPos.x >= 410) {
            this.carPos.x = 400
        }
    }




    
}