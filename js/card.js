class Car{ 


    constructor(ctx, posX, width, height) { 

        this.ctx = ctx
        this.carPosX = posX
        this.carPosY = 550
        this.carSize = {w: width, h: height }
        this.imageInstance = undefined

        this.init()
    }

    init() { 

        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        //console.log('xxxxxxxxxxxxxxxx DRAW')
        this.ctx.drawImage(this.imageInstance, this.carPosX, this.carPosY , this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPosX -= 5
    }

    moveRight() {
        this.carPosX += 5
    }


    
    }







