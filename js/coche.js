class Coche {
    constructor(ctx, cochePosX, cochePosY, cocheWidth, cocheHeight, cocheImage) {
        this.ctx = ctx;
        
        this.cochePos = { x: cochePosX, y: cochePosY }
        this.cocheSize = { w: cocheWidth, h: cocheHeight }
        this.cocheImage = cocheImage
        
         
        
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.cocheImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.cochePos.x, this.cochePos.y, this.cocheSize.w, this.cocheSize.h);
    }

    moveLeft() {
        this.cochePos.x -= 20
    }

    moveRight() {
        this.cochePos.x += 20
    }

    moveUp() {
        this.cochePos.y -= 20
    }
    moveDown() {
        this.cochePos.y += 20
    }

}
