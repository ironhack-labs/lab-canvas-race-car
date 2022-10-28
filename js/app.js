const app = {
    appName: 'Mi primer canvas yabadu',
    version: '1.0.0',
    license: undefined,
    author: 'David Muñoz',
    description: 'Lab juego',
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: undefined, h: undefined
    },
    carData: {
        pos: { x: 215, y: 600 },
        size: { w: 70, h: 100 },
        image: './images/car.png'

    },

    init() {
        this.setCont()
        this.setDimension()
        this.drawSquare()
        this.drawLine()
        this.creatCar()
        this.setHandlers()
        this.drawCar()
        this.start()

    },
    setCont() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    drawSquare() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, 440, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, 20, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(440, 0, 20, this.canvasSize.h)

    },
    drawLine() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15
        this.ctx.beginPath()
        this.ctx.setLineDash([50, 30])
        this.ctx.moveTo(250, 700)
        this.ctx.lineTo(250, 0)
        this.ctx.stroke()
        this.ctx.closePath()


    },
    setDimension() {
        this.canvasSize = {
            w: 500,
            h: 700,
        }
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
    },
    creatCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
    },
    drawCar() {

        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h
        )
    },
    start() {
        setInterval(() => {

            this.clearAll()
            this.drawSquare()
            this.drawLine()
            this.drawCar()
        }, 50)
    },
    setHandlers() {
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
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}
