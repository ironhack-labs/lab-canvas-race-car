class Car{
    constructor(ctx, posX, posY, carWidth, carHeight, img){
        this.ctx = ctx
        this.carPos = { x: posX, y: posY}
        this.carSize = { w: carWidth, h: carHeight}
        this.img
        this.canvasSize={
        w: 500,
        h: 700
        }
        this.init()
    }
    init(){
        this.carImg = new Image()
        this.carImg.src = `./images/car.png`
    }

    draw(){
        this.ctx.drawImage(this.carImg,this.carPos.x,this.carPos.y, this.carSize.w,this.carSize.h)
    }

    moveLeft(){
        if(1 < this.carPos.x){
            this.carPos.x -=20
        }
    }

    moveRight(){
        if(this.carPos.x < 440)
            this.carPos.x += 20
    }

    moveUp(){
        if(1 < this.carPos.y){
            this.carPos.y -= 20
        }
    }

    moveDown(){
        if(this.carPos.y < 600){
            this.carPos.y += 20
        }
    }
}