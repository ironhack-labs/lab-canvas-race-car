const canvasApp = {
    name: 'Car Race app',
    author: 'Jorge Hermo',
    version: '1.0.0',
    license: undefined,
    description: undefined,
    canvasSize: { w: undefined, h: undefined },
    ctx: undefined,
    framesIndex: 0,
    car: undefined,
    obstacle: [],

    init(canvas) {
        this.ctx = document.querySelector(canvas).getContext('2d')
        this.setDimensions(canvas)
        this.setEventListeners()
        this.creatAll()
        this.drawAll()
        this.clearAll()
    },

    setDimensions(canvas) {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        document.querySelector(canvas).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvas).setAttribute('height', this.canvasSize.h)
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
                    console.log(this.car.moveRight())
                    break;
            }
        }
    },

    drawRoad() {
        // Main ROAD

        this.ctx.fillStyle = 'green' // color
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillStyle = 'grey' // color
        this.ctx.fillRect(50, 0, 400, this.canvasSize.h)

        this.ctx.fillStyle = 'white' // color
        this.ctx.fillRect(60, 0, 10, this.canvasSize.h)

        this.ctx.fillStyle = 'white' // color
        this.ctx.fillRect(430, 0, 10, this.canvasSize.h)
            // DASHED LINE

        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = "white"

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 30])
        this.ctx.moveTo(240, 0)
        this.ctx.lineTo(240, 700)
        this.ctx.stroke()
        this.ctx.closePath()

    },



    creatAll() {
        this.car = new Car(this.ctx, 200, 550, 50, 100, 'car.png')
        console.log(this.car)
    },


    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad()
            this.car.draw()
            this.framesIndex++
        }, 50)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createObstacle() {

        let withAvailable = 300
        let randomWidth1 = Math.floor(Math.random() * withAvailable)
        let randomWidth2 = Math.floor(Math.random() * withAvailable)
        let randomWidthStart = 0
        let randomWhithEnd = 0

        if (randomWidth1 < randomWidth2) {
            randomWidthStart = 60 + randomWidth1
            randomWhithEnd = 60 + randomWidth2
        }
        if (randomWidth1 > randomWidth2) {
            randomWidthStart = 60 + randomWidth2
            randomWhithEnd = 60 + randomWidth1
        }

        this.fillStyle = 'red'
        this.fillRect = (randomWidthStart, 0, randomWhithEnd, 30)

    }
}