class Car {
    constructor(ctx, gameSize, posX, posY, width, height){
        this.ctx=ctx
        this.gameSize
        this.posCar={x:posX, y:posY}
        this.carSize={w: width, h:height}
        this.imageInstance=undefined
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }
    draw(){
     this.ctx.drawImage(this.imageInstance, this.posCar.x, this.posCar.y, this.carSize.w, this.carSize.h)
    }
    moveRight(){
        this.posCar.x+=10
    }
    moveLeft(){
        this.posCar.x-=10
    }
}