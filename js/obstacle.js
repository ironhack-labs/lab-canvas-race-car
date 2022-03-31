class Obstacle {
    constructor(ctx, posX, posY, width, gameSize) {
        this.ctx = ctx
        this.obsPos = { x: posX, y: posY }
        this.obsSize = { w: width, h: 25 }
        this.obsImage = 'obs.png'
        this.gameSize = gameSize

        this.init()
    }

    init() {

    }

    draw() {
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsSize.w, this.obsSize.h)
    }

    move() {

        this.obsPos.y += 7
        // if (this.obsPos.x + this.obsSize.w / 2 > 70) {
        //     this.obsPos.x -= 32
        // }

    }


}