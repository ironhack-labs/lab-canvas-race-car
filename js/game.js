const controlsApp = {
    ctx: undefined,
    carInstance: undefined,
    carSpecs: {
        pos: { x: 232, y: 628 },
        size: { w: 36, h: 72 }
    },
    canvasSize: {
        w: 500,
        h: 700
    },
    framesIndex: 0,

    obstacles: [],

    init() {
        this.setContext()
        this.setImageInstances()
        this.setEventListeners()
        this.createObstacle()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector("#canvas").getContext("2d")
    },
    setEventListeners() {
        document.onkeyup = event => {
            const { key } = event

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 30
            }

            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 30
            }
        }
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
        }, 50)
    },

    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = "./images/car.png"
    },

    drawRoad() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        //centro gris
        this.ctx.fillStyle = "gray"
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
        //lineas blancas
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(40, 0, 10, this.canvasSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(450, 0, 10, this.canvasSize.h)
        //lineas cortadas
        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 60])      // <-- patrón de repetición
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawCar() {
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },

    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.obstacles.forEach(elm => elm.draw())
        if (this.framesIndex % 20 === 0) {
            this.createObstacle()
        }
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createObstacle() {
        const obstaclesWidth = [100, 180, 150, 120]
        const obstaclesXposition = [50, 150, 250, 200]
        const randomIndexwidth = Math.floor(Math.random() * obstaclesWidth.length)
        const randomIndexPosition = Math.floor(Math.random() * obstaclesWidth.length)
        this.obstacles.push(
            new Obstacles(this.ctx, this.canvasSize, obstaclesWidth[randomIndexwidth], obstaclesXposition[randomIndexPosition]),
        )
    }
}