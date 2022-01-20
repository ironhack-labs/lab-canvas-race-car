
class Car {

    constructor (ctx, posX, posY, width, gameSize) {

     this.ctx= ctx
     this.carPos = { x: posX, y: posY }
     this.carSize = { w: width, h: width * .50 }
     this.imageInstance = undefined
     this.gameSize = gameSize

     this.init()

    }

    init(){
        this.carImage = new Image()
        this.carImage.src = "images/car.png"
    }

    draw(){

        this.ctx.drawImage(this.carImage, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)

    }





}