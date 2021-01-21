const drawRoad = {
    ctx: undefined,
    /** @type {CanvasRenderingContext2D} */

    canvasDOM: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },

    init() {
        this.canvasDOM = document.querySelector('canvas')
        console.log(this.canvasDOM)
        this.ctx = this.canvasDOM.getContext('2d')
        console.log(this.ctx)
        this.drawRoadSides()
        this.drawMainRoad()
        this.drawCentralLine()
    },

    /*----Green and Grey parts on the side of the road (left and right)----*/
    drawRoadSides() {
        this.ctx.fillStyle = "#008200" 
        this.ctx.fillRect(0, 0, 30, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w-30, 0, 30, this.canvasSize.h)
        this.ctx.fillStyle = "#808080"
        this.ctx.fillRect(30, 0, 10, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w-40, 0, 10, this.canvasSize.h)
    },

    /*----Central grey background----*/
    drawMainRoad() {
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0 , 400, this.canvasSize.h)
        
    },

    /*----Central dashed line----*/
    drawCentralLine() {
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash ([40, 20])
        this.ctx.lineWidth = 10
        this.ctx.stroke()
    }
    
}