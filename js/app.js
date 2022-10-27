const app = {
    appName: 'My first experiment',
    version: '0.0.1',
    license: undefined,
    author: 'Alexis Márquez',
    description: 'I do my best',
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: 500, h: 700
    },
    carData: {
        pos: { x: 215, y: 450 },
        size: { w: 80, h: 150 },
        image: 'images/car.png'
    },
    obstacleData: {
        pos: { x: undefined, y: undefined },
        size: { w: 180, h: 20 }
    },

    init() {
        this.setContext()
        this.createCar()
        this.setEventHandlers()
        this.drawSquare()
        this.drawLines()
        this.drawObstacle()
        this.drawAll()
        this.start()



    },
    drawObstacle() {
        this.ctx.fillStyle = 'darkred'
        this.ctx.fillRect(100, 250, this.obstacleData.size.w, this.obstacleData.size.h)

    },


    drawSquare() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w / 2 + 150, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 10, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(430, 0, 10, this.canvasSize.h)

    },
    drawLines() {
        this.ctx.setLineDash([35, 20])
        this.ctx.moveTo(this.canvasSize.w / 2 + 5, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 + 5, this.canvasSize.h)
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.stroke()
    },


    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
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
            this.drawSquare()
            this.drawLines()
            this.drawAll()
            this.drawObstacle()
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
            this.carData.size.h
        )

    },









}