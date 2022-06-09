class obstacle {

    constructor(ctx, posX, posY, width, heigth, canvasSize) {

        this.ctx = ctx
        this.obsPos = { x: posX, y: posY }
        this.obsSize = { w: width, h: heigth }
        this.canvasSize = canvasSize
        this.obsImage = undefined

    }

    obsDimensions() {
        this.obsSize = {
            w: 1000,
            h: 1000
        }
    }

    drawObs() {
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(40, 100, 200, 30)
    }



}