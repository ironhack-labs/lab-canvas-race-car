const backGroundDraw = {
    appName: `Back Ground Draw`,
    author: `Salvador Rus`,
    version: `1.0000000.`,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    car: undefined,
    framesIndex: 0,
    obtacle: [],
    obstacleposx: undefined,
    obstacleposy: undefined,
    obstaclew: undefined,


    init() {
        this.setContext()
        this.setSize()
        this.rectangle()
        this.lines()
        this.dashedLines()
        this.createCar()
        this.drawAll()
        setInterval(() => {
            this.drawAll()
        }, 70)
        this.setEventHandlers()


    },
    setContext() {
        this.ctx = document.querySelector(`#canvas`).getContext(`2d`)
    },

    setSize() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w / 2)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)
    },

    rectangle() {
        this.ctx.fillStyle = `green`
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = `grey`
        this.ctx.fillRect(50, 0, this.gameSize.w / 2 - 100, this.gameSize.h)
    },
    lines() {
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(100, 0)
        this.ctx.lineTo(100, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(855, 0)
        this.ctx.lineTo(855, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    dashedLines() {
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(470, 0)
        this.ctx.setLineDash([100, 50])
        this.ctx.lineTo(470, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0, 0])
    },

    createCar() {
        this.car = new Car(this.ctx, 200, 700, 75, 100)
    },
    drawAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w / 2, this.gameSize.h)
        this.rectangle()
        this.lines()
        this.dashedLines()
        this.car.draw()
        this.drawRectObst

    },
    drawRectObst() {
        this.obtacle.puch(new Obstacle(this.ctx, this.obstacleposx, this.obstacleposy, this.obstaclew))
    },

    setEventHandlers() {
        document.addEventListener(`keydown`, event => {
            const { key } = event
            console.log(key)
            key === `ArrowRight` ? this.car.moveRight() : null
            key === `ArrowLeft` ? this.car.moveLeft() : null
            key === `ArrowUp` ? this.car.moveUp() : null
            key === `ArrowDown` ? this.car.moveDown() : null
        })
    },
    ramdonObs() {
        this.obstacleposx = Math.floor(Math.random() * (200 - 40) + 40);
        this.obstacleposy = Math.floor(Math.random() * (300 - 40) + 40);
        this.obstaclew = Math.floor(Math.random() * (100 - 40) + 40);
    },
    createObstacle() {
        this.ramdonObs();
        this.obtacle.push(
            new Obstacle(
                this.ctx,
                this.obstacleposx,
                this.obstacleposy,
                this.obstaclew,

            ))
    }
}