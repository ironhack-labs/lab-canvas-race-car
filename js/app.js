const firtGame = {
    name: 'Dirty road',
    description: 'Geme of driving',
    version: '0.0.1',
    license: 'undefined',
    author: 'Juan Antonio Caballero',
    canvasTag: undefined,
    carInstance: undefined,
    carPosition: { x: 200, y: 550, },
    carSize: { w: 100, h: 150 },
    canvas: document.getElementById('canvas'),
    canvasSize: {
        w: document.querySelector("#canvas.width"),
        h: document.querySelector("#canvas.height"),
    },
    ctx: canvas.getContext('2d'),


    init() {
        this.createCar()
        this.setContext()
        this.start()
        this.setEventListeners()
    },


    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
        }, 10)
    },


    setEventListeners() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft') this.carPosition.x -= 5
            if (evt.key === 'ArrowRight') this.carPosition.x += 5
            if (evt.key === 'ArrowDown') this.carPosition.y += 5
            if (evt.key === 'ArrowUp') this.carPosition.y -= 5
            if (evt.key === 'ArrowLeft') this.carPosition.x -= 5
            if (evt.key === 'ArrowRight') this.carPosition.x += 5
            if (evt.key === 'ArrowDown') this.carPosition.y += 5
            if (evt.key === 'ArrowUp') this.carPosition.y -= 5
        }
    },


    drawAll() {
        this.drawRoad()
        this.drawCar()
    },


    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },


    drawRoad() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(0, 0, 500, 700)

        this.ctx.fillStyle = 'gray';
        this.ctx.fillRect(50, 0, 400, 7000)

        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(70, 0, 20, 700)

        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(410, 0, 20, 700)

        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(250, 700)
        this.ctx.lineTo(250, 0)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)

    },



    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },


}
