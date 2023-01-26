const animatedApp = {
    name: 'Canvas Race Car',
    description: 'Basic Canvas app for element controlling',
    version: '1.0.0',
    license: undefined,
    author: 'Cristina Gutiérrez',
    canvasTag: undefined,
    ctx: undefined,
    framesIndex: 0,
    canvasSize: { w: 500, h: 700 },
    carInstace: undefined,
    carSize: { w: 50, h: 100 },
    carPosition: { x: undefined, y: undefined },
    // carLeft: false,
    // carRight: false,
    obstacles: [],

    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.start()
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 200 === 0) {
                this.createObstacle()
                this.framesIndex = 0
            }
        }, 10)
    },

    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },

    setDimensions() {
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    setEventListeners() {
        // document.onkeydown = evt => {
        //     if (evt.key === 'ArrowLeft') this.carLeft=true
        //     if (evt.key === 'ArrowRight') this.carRight = true
        // }
        // document.onkeyup = evt => {
        //     if (evt.key === 'ArrowLeft') this.carLeft = false
        //     if (evt.key === 'ArrowRight') this.carRight = false
        // }

        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft') {
                if (this.carPosition.x > 10) {
                    this.carPosition.x -= 10
                }
            }
            if (evt.key === 'ArrowRight') {
                if (this.carPosition.x + this.carSize.w < this.canvasSize.w - 10) {
                    this.carPosition.x += 10
                }
            }
        }
    },

    createCar() {
        this.carInstace = new Image()
        this.carInstace.src = './images/car.png'
        this.carPosition = {
            x: (this.canvasSize.w / 2 - this.carSize.w / 2),
            y: (this.canvasSize.h - this.carSize.h - 10)
        }
    },

    createObstacle() {
        this.obstacles.push(
            new Obstacle(this.ctx, this.canvasSize)
        )
    },

    drawCar() {
        this.ctx.drawImage(this.carInstace, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)

    },

    drawRoad() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 40, 700)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(460, 0, 40, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(55, 0, 15, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(430, 0, 15, 700)

        // Central line
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6
        this.ctx.setLineDash([30, 30])
        this.ctx.moveTo(this.canvasSize.w / 2 - 3, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 3, this.canvasSize.h)
        this.ctx.stroke()
    },

    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.obstacles.forEach(elm => elm.draw())
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

}