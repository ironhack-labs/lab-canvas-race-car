const canvasApp = {
    name: 'Race cars application',
    author: 'Ghers Fisman',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas app for basic race cars game',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    car: undefined,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
        this.createAll()
        this.drawAll()
        this.setEventListeners()
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: 400,
            h: 625
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },

    setEventListeners() {
        document.onkeydown = e => {
            const {key} = e
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

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, 10, this.canvasSize.h)
        this.ctx.fillRect(350, 0, 10, this.canvasSize.h)
    },

    drawMiddleLines() {
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.setLineDash([20, 15])
        this.ctx.moveTo(197.5, 0)
        this.ctx.lineTo(197.5, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createAll() {
        this.car = new Car(this.ctx, 172.5, 50, 100)
        console.log(this.car)
    },

    drawAll() {
        setInterval(() => {
            this.drawRoad()
            this.drawMiddleLines()
            this.car.draw()
        }, 50)
    }
}
