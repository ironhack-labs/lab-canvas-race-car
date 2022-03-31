class Car {

    constructor(ctx, posX, posY, width, height,speed) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.speed = speed
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
        
    }

    moveLeft() {
        this.carPos.x -= 5

        if (this.carPos.x <= 0) {
            alert('no te salgas')
        }
        
    }

    moveRight() {
        this.carPos.x += 5
        
        if (this.carPos.x >= 430) {
            
            
            alert('no te salgas')
        }

    }

    
   

}