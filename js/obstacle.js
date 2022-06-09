class obs {
    constructor(ctx) {

        this.ctx = ctx
        this.obsSize = { w: undefined, h: 30 }
        this.obsPos = { x: 0, y: 0 }

        this.init()
    }

    init() {

        this.obsSize.w = Math.random() * 400


    }

    drawObs() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsSize.w - 60, this.obsSize.h)
    }

    moveDown() {

        this.obsPos.y += 10
    }
}