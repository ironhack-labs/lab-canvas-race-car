const gameRules = {
    appName: 'Car Racing',
    author: 'Ana Guardado Flores',
    version: '1.0.0',
    license: undefined,
    description: 'A video game about riding cars',
    ctx: undefined,
    canvasSize: undefined,
    carInstance: undefined,
    carSpecs: {
        pos: { x: 100, y: 100 },
        size: { w: 100, h: 100 }
    },

    init() {
        this.setContext()
        this.setDimensions()
        this.drawRoad()
        this.drawAll()
        this.setImageInstances()
        this.start()
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)
    },

    drawRoad() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(70, 0, this.canvasSize.w - 140, this.canvasSize.h)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(90, 0, this.canvasSize.w - 180, this.canvasSize.h)

        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 30])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawAll() {
        this.drawCar()
        this.drawCar()
    },

    drawCar() {
        console.log()
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },

    setImageInstances() {
        this.carInstace = new Image()
        this.carInstace.src = './images/car.png'
    },







    //No vale porque no va la imagen

    // setEventListeners() {
    //     document.onkeyup = event => {
    //         const { key } = event
    //         if (key == 'ArrowLeft') {
    //             this.carSpects.pos.x -= 15
    //         }

    //         if (key == 'ArrowRight') {
    //             this.carSpects.pos.x += 15
    //         }
    //     }
    // },


    // clearAll() {
    //     this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    // }

}
// gameRules.init();