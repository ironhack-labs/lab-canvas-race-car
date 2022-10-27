const app = {
    appName: "Iron Hack Island Racer",
    version: '1.0.0',
    license: undefined,
    author: 'Gonzalo García',
    description: 'First try doing a videogame',
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: undefined, h: undefined
    },
    carData: {
        pos: { x: 210, y: 600 },
        size: { w: 80, h: 80 },
        image: 'images/car.png'
    },

    init() {
        this.setDimensions()
        this.setContext()
        this.drawRoad()
        this.createCar()
        this.setEventHandlers()
        this.createObstacle()
        this.start()
    },
    setDimensions() {
        this.canvasSize = {
            w: document.querySelector('#canvas').width,
            h: document.querySelector('#canvas').height,
        }
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },
    createObstacle() {
        this.obstacles.push
    },

    drawRoad() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, 440, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(45, 0, 10, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(445, 0, 10, 700)

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.setLineDash([20, 10])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
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
                    break;
            }
        }
    },
    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
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
        this.drawRoad()
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h,
        )
    }
}