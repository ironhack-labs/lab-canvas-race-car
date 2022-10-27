
const app = {
    appName: 'Race Car',
    version: '1.0.0',
    license: undefined,
    author: 'Alex Lino',
    description: 'Race Car Ironhack Game',
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    carData: {
        pos: { x: 200, y: 500 },
        size: { w: 75, h: 150 },
        image: 'images/car.png'
    },
    init() {
        this.setContext()
        this.drawRoad()
        this.drawLines()
        this.createCar()
        this.setEventHandlers()


        this.drawAll()
        this.start()


    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')

    },

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w / 2 + 150, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(70, 0, 10, this.canvasSize.h)
        this.ctx.fillRect(420, 0, 10, this.canvasSize.h)

    },
    drawLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, 700)
        this.ctx.stroke()
    },
    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad()
            this.drawLines()
            this.createCar()




            this.drawAll()


        }, 50)
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
                case 'ArrowUp':
                    this.carData.pos.y -= 10
                    break;
                case 'ArrowDown':
                    this.carData.pos.y += 10
            }
        }
    },

    drawAll() {
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h,

        )
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}






