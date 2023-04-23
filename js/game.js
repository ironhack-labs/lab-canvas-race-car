const controlsApp = {
    ctx: undefined,
    carInstance: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    carSpecs: {
        size: { w: 36, h: 72 },
        pos: undefined
    },
    framesIndex: 0,

    obstacles: [],

    init() {
        this.setContext()
        this.setImageInstances()
        this.setEventListeners()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector("#canvas").getContext("2d")
        this.carSpecs.pos = { x: this.canvasSize.w / 2 - this.carSpecs.size.w / 2, y: this.canvasSize.h - this.carSpecs.size.h }
    },
    setEventListeners() {
        document.onkeydown = event => {
            const { key } = event

            if (key == 'ArrowLeft' && this.carSpecs.pos.x >= 55) {
                this.carSpecs.pos.x -= 30
            }

            if (key == 'ArrowRight' && this.carSpecs.pos.x <= 400) {
                this.carSpecs.pos.x += 30
            }
        }
    },
    start() {
        this.intervalId = setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.Collision() ? this.gamerOver() : null
            this.framesIndex++
        }, 50)
    },

    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = "./images/car2.svg"
        //obstáculos
        this.obsInstance = new Image
        this.obsInstance.src = "./images/vaya.svg"
    },

    drawRoad() {
        this.ctx.fillStyle = "#5BB318"
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        //centro gris
        this.ctx.fillStyle = "black"
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
        this.obstacles.push(new Obstacles(this.ctx, this.canvasSize, this.obsInstance, obstaclesWidth[randomIndexwidth], obstaclesXposition[randomIndexPosition]));
    },

    Collision() {
        return this.obstacles.some((obs) => {
            return this.carSpecs.pos.x + this.carSpecs.size.w >= obs.obstaclesSpecs.xPosition &&
                this.carSpecs.pos.x <= obs.obstaclesSpecs.xPosition + obs.obstaclesSpecs.width &&
                this.carSpecs.pos.y + this.carSpecs.size.h >= obs.obstaclesSpecs.yPosition &&
                this.carSpecs.pos.y <= obs.obstaclesSpecs.yPosition + 50
        })
    },

    gamerOver() {
        clearInterval(this.intervalId)
        setTimeout(() => {
            location.reload()
        }, 1500)
    }
}