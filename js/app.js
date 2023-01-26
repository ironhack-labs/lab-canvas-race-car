const controlledApp = {
    name: "Island Racer Game Lab",
    description: "App to create the game Island Racer",
    version: "1.0.0",
    license: undefined,
    author: "Ivan",
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    carInstance: undefined,
    carPosition: { x: 0, y: 0 },
    carSize: { w: 50, h: 100 },
    fluidLeft: false,
    fluidRight: false,
    obstacles: [],
    framesIndex: 0,


    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.posCar()
        this.createObstacle()
        this.start()
    },

    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },
    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = ({ key }) => {

            switch (key) {
                case 'ArrowRight':
                    this.fluidRight = true
                    break;
                case 'ArrowLeft':
                    this.fluidLeft = true
                    break;
            }
        }
        document.onkeyup = ({ key }) => {
            if (key === 'ArrowRight') this.fluidRight = false
            if (key === 'ArrowLeft') this.fluidLeft = false
        }

    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            if (this.fluidLeft) this.carPosition.x -= 3
            if (this.fluidRight) this.carPosition.x += 3
            this.framesIndex++
            this.obstacles.forEach(elm => elm.move())
            if (this.framesIndex % 100 === 0) this.createObstacle()
            this.obstacles.forEach(elm => {
                if (this.carPosition.x < elm.obstaclePos.x + elm.obstacleSize.w &&
                    this.carPosition.y < elm.obstaclePos.y + elm.obstacleSize.h &&
                    this.carPosition.x + this.carSize.w > elm.obstaclePos.x &&
                    this.carPosition.y + this.carSize.h > elm.obstaclePos.y) {
                    this.stop()
                    alert('GAME OVER!')
                    location.reload()
                }
            })
        }, 10)
    },
    stop() {
        clearInterval(1)
    },
    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = '../images/car.png'
    },
    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.generatesObstacle()
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(!this.canvasSize.w, !this.canvasSize.h, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(!this.canvasSize.w + 50, !this.canvasSize.h, this.canvasSize.w - 100, this.canvasSize.h)
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([0, 0])
        this.ctx.moveTo(!this.canvasSize.w + 75, !this.canvasSize.h)
        this.ctx.lineTo(!this.canvasSize.w + 75, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([0, 0])
        this.ctx.moveTo(this.canvasSize.w - 75, !this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w - 75, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, !this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    posCar() {
        this.carPosition = {
            x: (this.canvasSize.w / 2) - (this.carSize.w / 2),
            y: (this.canvasSize.h - this.carSize.h) - 50,
        }
    },
    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    },
    createObstacle() {
        this.obstacles.push(
            new Obstacle(this.ctx, this.canvasSize),
        )
    },
    generatesObstacle() {
        this.obstacles.forEach(elm => elm.draw())
    },


}
