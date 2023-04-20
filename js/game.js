
const game = {
    appName: 'Car Racing App',
    author: 'Roberto Arcos',
    version: '1.0.0',
    license: undefined,
    description: 'Race Car Lab',
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    carInstance: undefined,
    carSpecs: {
        pos: { x: 250 - 70, y: 525 },
        size: { w: 100, h: 100 }
    },
    init() {
        this.setContext()
        this.setDimensions()
        // this.drawRoad()
        this.setImageInstances()
        this.start()
        this.setEventListeners()

    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad()
            this.drawCar()
        }, 50)
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    setDimensions() {
        this.canvasSize = {
            w: document.querySelector('canvas').getAttribute('width'),
            h: document.querySelector('canvas').getAttribute('height')
        }
    },
    drawRoad() {
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(this.canvasSize.w / 2 - 500, 0, 700, this.canvasSize.h)
        this.ctx.beginPath()
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([70, 20])
        this.ctx.moveTo(this.canvasSize.w / 2 - 20, 0);
        this.ctx.lineTo(this.canvasSize.w / 2 - 20, this.canvasSize.h);
        this.ctx.stroke()
    },
    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    drawCar() {
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeyup = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 25
            }

            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 25
            }

            if (key == 'ArrowUp') {
                this.carSpecs.pos.y -= 25
            }
            if (key == 'ArrowDown') {
                this.carSpecs.pos.y += 25
            }

        }
    },
}




