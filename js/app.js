const app = {
    appName: 'Mi primer canvas',
    version: '1.0.0',
    license: undefined,
    author: 'Raquel Tejada',
    description: 'First Canvas app for basic shapes controlling',
    ctx: undefined,
    imagenInstance: undefined,
    canvasSize: {
        w: 500, h: 700
    },
    carData: {
        pos: { x: 300, y: 300 },
        size: { w: 100, h: 100 },
        image: 'images/car.png'
    },

    init() {
        this.setContext()
        this.setEventHandlers()
        this.drawRoad()
        this.createCar()
        this.start()
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

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 20)
    },

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(35, 0, this.canvasSize.w - 70, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(45, 0, this.canvasSize.w - 90, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(55, 0, this.canvasSize.w - 110, this.canvasSize.h)

        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.setLineDash([40, 20])
        this.ctx.moveTo(this.canvasSize.w / 2 - 4, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 4, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.imagenInstance = new Image()
        this.imagenInstance.src = this.carData.image
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.drawRoad()
        this.ctx.drawImage(
            this.imagenInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h
        )
    }

}