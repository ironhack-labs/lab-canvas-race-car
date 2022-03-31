const drawnRoad = {
    name: "road",
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    imageInstance: undefined,





    init(canvasId) {
        this.canvasNode = document.querySelector(`#${canvasId}`)
        this.ctx = this.canvasNode.getContext('2d')
        console.log('EL CONTEXTO:', this.ctx)
        this.setDimensions()
        this.drawFilledSquare()
        this.drawSolidLines()
        this.drawDashedLine()
        this.createCar()
        this.start()
        this.setEventListeners()
    },

    setDimensions() {
        this.gameSize = {
            w: 500,
            h: 700,
        }
    },
    drawFilledSquare() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w / 2 - 200, this.gameSize.h)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(450, 0, this.gameSize.w / 2 - 200, this.gameSize.h)
    },
    drawSolidLines() {

    },
    drawDashedLine() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, 0)
        this.ctx.setLineDash([60, 20]) // <--
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createCar() {
        this.car = new car(this.ctx, this.gameSize, this.gameSize.w / 2 - 50, this.gameSize.h - 100, 50, 100)
    },
    setEventListeners() {
        document.onkeyup = event => {
            const { key } = event
            if (key === 'ArrowLeft') {
                this.car.moveLeft()
            }
            if (key === 'ArrowRight') {
                this.car.moveRight()
            }
        }
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
        }, 30)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    drawAll() {
        this.drawDashedLine()
        this.car.draw()
        this.drawFilledSquare()

    },





}