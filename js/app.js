const canvasRaceCar = {
    name: 'Canvas Race Car',
    description: 'Basic Canvas app',
    version: '1.0.0',
    license: 'undefined',
    author: 'Jacob Viv',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: { w: 500, h: 700 },
    carInstance: undefined,
    carPosition: { x: 225, y: 550 },
    carSize: { w: 50, h: 100 },
    framesIndex: 0,
    obstacles: [],

    init() {
        this.createCar()    //  al inicio porque tarde en cargar la imagen
        this.setContext()
        this.setEventListeners()
        this.drawAll()
        this.start()
    },
    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
        console.log(this.ctx)
    },

    setEventListeners() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.carPosition.x > 10) this.carPosition.x -= 20
            if (evt.key === 'ArrowRight' && this.carPosition.x < 440) this.carPosition.x += 20
            if (evt.key === 'ArrowUp' && this.carPosition.y > 300) this.carPosition.y -= 20
            if (evt.key === 'ArrowDown' && this.carPosition.y < 550) this.carPosition.y += 20

        }
    },

    createObstacles() {
        this.obstacles.push(new Obstacle(this.ctx, this.canvasSize))
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 250 === 0) this.createObstacles()
            this.obstacles.forEach(elm => elm.move())
        }, 10)
    },
    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },

    drawAll() {
        this.drawRoad()
        this.drawDashedLine()
        this.drawCar()
        this.obstacles.forEach(elm => elm.generateObstacles())    //  Ojo
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(55, 0, 15, this.canvasSize.h)
        this.ctx.fillRect(430, 0, 15, this.canvasSize.h)
    },

    drawDashedLine() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([25, 15])      // <-- patrón de repetición
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    },

}