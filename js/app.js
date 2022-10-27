const app = {

    appName: 'Island Race',
    version: '1.0.0',
    license: undefined,
    author: 'Alejandro Abad',
    description: 'Racing Cars Game',
    ctx: undefined,
    canvasSize: {
        w: undefined, h: undefined
    },

    carData: {
        pos: { x: this.canvasSize.w / 2, y: this.canvasSize.h },
        size: { w: 100, h: 100 },
        image: 'img/car.png'
    },

    init() {
        this.setDimensions()
        this.setContext()
        this.drawRoad()
        this.createCar()
        this.setEventHandlers()
        this.start()
        this.clearAll()
        this.drawAll()


    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700

        }

        document.querySelector('#canvas').setAttribute('width', this.canvasSize.w),
            document.querySelector('#canvas').setAttribute('height', this.canvasSize.h)

    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },

    drawRoad() {

        //rectangles

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

        //Dashed lines

        this.ctx.beginPath()

        this.ctx.setLineDash([50, 60])

        this.ctx.moveTo(this.canvasSize.w / 2, 0)

        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)

        this.ctx.strokeStyle = 'white'

        this.ctx.lineWidth = 20

        this.ctx.stroke()

        this.ctx.closePath()

        //Line1

        this.ctx.beginPath()

        this.ctx.setLineDash([0, 0])

        this.ctx.moveTo(50, 0)

        this.ctx.lineTo(50, this.canvasSize.h)

        this.ctx.strokeStyle = 'white'

        this.ctx.lineWidth = 20

        this.ctx.stroke()

        this.ctx.closePath()

        //Line2

        this.ctx.beginPath()

        this.ctx.setLineDash([0, 0])

        this.ctx.moveTo(this.canvasSize.w - 50, 0)

        this.ctx.lineTo(this.canvasSize.w - 50, this.canvasSize.h)

        this.ctx.strokeStyle = 'white'

        this.ctx.lineWidth = 20

        this.ctx.stroke()

        this.ctx.closePath()
    },


    createCar() {

        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image

    },

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.carData.pos.x -= 10
                    break;
                case 'ArrowRight':
                    this.carData.pos.x += 10
                    break;
            }
        }
    },




    start() {

        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)

    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carDataa.size.h
        )

    },

}