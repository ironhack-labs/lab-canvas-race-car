class Car {
    constructor(ctx, posX, posY, w, h, canvasSize) {
        this.ctx = ctx,
        this.posX = posX,
        this.posY = posY,
        this.w = w,
        this.h = h,
        this.canvasSize = canvasSize,
        this.img = undefined

        this.init()
    }


    init() {
        this.img = new Image()
        this.img.src = `images/car.png`
        this.img.onload = () => this.ctx.drawImage(this.img, this.posX, this.posY, this.w, this.h)
    }

    move(dir) {
        dir === 'left' ? this.posX -= 5 : null
        dir === 'right' ? this.posX += 5 : null
    }
    
    draw() {
        this.ctx.drawImage(this.img, this.posX, this.posY, this.w, this.h)
    }

    drawImage() {
        this.car = new Image()
        this.car.src = `images/car.png`
        
    }

}

