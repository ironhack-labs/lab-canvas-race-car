class Obstacle {
    constructor(ctx, obsX, obsY, width, height,) {
        this.ctx = ctx
        this.obsPos = { x: obsX, y: obsY }
        this.obsSize = { w: width, h: height }
        
        
    }

    

    // init() {
    //     this.imageInstance = new Image()
    //     this.imageInstance.src = './images/car.png'
    // }


    draw() {
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsSize.w, 100)

        
    }

    move() {
        this.obsPos.y += 4
    }
}
