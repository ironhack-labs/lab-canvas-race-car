class Car {

    constructor(ctx, gameSize, posX, posY, width, height) {
        
        this.ctx = ctx
        this.gameSize = gameSize
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.imageInstance = undefined
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "images/car.png"
    }
    draw() {
        
       this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    moveLeft() {
        if(this.carPos.x > 20)
        this.carPos.x -= 20
    }
    moveRight() {
        if(this.carPos.x < 325)
        this.carPos.x += 20
    }














}