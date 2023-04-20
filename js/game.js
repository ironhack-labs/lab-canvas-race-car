const game = {
    appName: 'Race Car',
    description: 'Drive evading obstacles',
    ctx: undefined,
    frameIndex: 0,
    obstaclesArr: [],
    canvasSize: {
        w: 500,
        h: 700
    },
    carInstance: undefined,
    carSpecs: {
        pos: { x: 250 - 50, y: 550 },
        size: { w: 100, h: 100 }
    },
    init() {
        this.setContext()
        this.setDimensions()
        this.drawMap()
        this.setEventListeners()
        this.setImageInstances()
        this.createObstacle()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    setEventListeners() {
        document.onkeydown = event => {
            const { key } = event

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 10
            }
            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 10
            }
            if (key == 'ArrowUp') {
                this.carSpecs.pos.y -= 10
            }
            if (key == 'ArrowDown') {
                this.carSpecs.pos.y += 10
            }
        }
    },
    setDimensions() {
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },
    drawMap() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 7
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
    },
    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawMap()
            this.drawCar()
            this.frameIndex++
            this.giveObstacle()
        }, 50)
    },
    drawCar() {
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h)
    },
    giveObstacle() {
        this.obstaclesArr.forEach(elm => elm.drawObstacle())
        if (this.frameIndex % 50 === 0) this.createObstacle()

    },
    createObstacle() {
        const posX = Math.random() * 300
        this.obstaclesArr.push(
            new Obstacles(this.ctx, this.canvasSize, posX, 10),
        )
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    // checkCollision(){
    //     if (this.carInstance.x < rect2.x + rect2.w &&
    //         rect1.x + rect1.w > rect2.x &&
    //         rect1.y < rect2.y + rect2.h &&
    //         rect1.h + rect1.y > rect2.y)
    // }
}
