const raceGame = {
    name: 'Island Racer',
    description: 'Race game with obstacles',
    version: '1.0.0',
    license: undefined,
    author: 'Andrei',
    canvasTag: undefined,
    ctx: undefined,
    carInstance: undefined,
    carPosition: { x: 250, y: 690 },
    carDimensions: { w: 50, h: 100 },
    speedCar: 30,
    framesIndex: 0,
    obstaclePosition: { x: 250, y: 0 },
    obstacles: [],

    init() {
        this.createCar()
        this.setContext()
        // this.createObstacle()
        this.drawAll()
        this.start()
        this.setEventListeners()
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 100 === 0) obstacle.createRandObstacle()
        }, 10)
    },

    drawAll() {
        this.drawStreet()
        this.drawDashedLine()
        this.drawCar()
    },

    setContext() {
        this.canvasTag = document.getElementById('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },

    drawStreet() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(45, 0, 410, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(55, 0, 10, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(435, 0, 10, 700)
    },

    drawDashedLine() {
        this.ctx.beginPath()
        this.ctx.moveTo(250, 2)
        this.ctx.lineTo(250, 700)
        this.ctx.lineWidth = 10
        this.ctx.stroke()
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 45])
    },

    clearAll() {
        this.ctx.clearRect(0, 0, 500, 700)
    },

    setEventListeners() {
        document.onkeyup = evt => {
            if (evt.key === 'ArrowLeft' && this.carPosition.x > 70) this.carPosition.x -= this.speedCar
            if (evt.key === 'ArrowRight' && this.carPosition.x < 430) this.carPosition.x += this.speedCar
        }
    },

    // createObstacle() {
    //     this.obstacles.push(
    //         new obstacle(),
    //         new obstacle(),
    //         new obstacle(),
    //         new obstacle(),
    //         new obstacle()
    //     )
    // },

    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = "./images/car.png"
    },

    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x - this.carDimensions.w / 2, this.carPosition.y - this.carDimensions.h, this.carDimensions.w, this.carDimensions.h)
    }
}