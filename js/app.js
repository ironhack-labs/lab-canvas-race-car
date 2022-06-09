const canvasApp = {
    name: "Road race game",
    author: "Ovidiu Stanescu",
    version: "1.0.0",
    license: undefined,
    description: "Canvas app for Race game",
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,

    //framesIndex: 0,

    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext("2d")
        this.setDimensions(canvasId)
        this.drawRoad()
        this.drawLine()
        this.drawDashedLine()
        this.createAll()
        this.drawAll()
        this.setEventListeners()
    },

    setDimensions(canvasId) {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        document.querySelector(canvasId).setAttribute("width", this.canvasSize.w)
        document.querySelector(canvasId).setAttribute("heigth", this.canvasSize.h)
    },

    drawRoad() {
        this.ctx.fillStyle = 'green'                      // color relleno
        this.ctx.fillRect(0, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
    },

    drawLine() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.setLineDash([0, 0])
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.setLineDash([0, 0])
        this.ctx.moveTo(450, 0)
        this.ctx.lineTo(450, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawDashedLine() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = "white"

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    setEventListeners() {
        document.onkeydown = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.car.moveLeft()
                    break;
                case 'ArrowRight':
                    this.car.moveRight()
                    break;
            }
        }
    },
    
    createAll() {
        this.car = new car(this.ctx, 10, 10, 200, 8, this.canvasSize)

    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad()
            this.drawLine()
            this.drawDashedLine()
            this.car.draw()
            

            //this.framesIndex++
            //if (this.framesIndex % 50 === 0) {
            //    this.generateObstacle()
            //}
        }, 50);
    },

    clearAll(){
        this.ctx.clearRect(0,0, this.canvasSize.w, this.canvasSize.h)
    }
}







