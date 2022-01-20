const app = {
    appName: '',
    author: 'Sara Puertas',
    version: '1.0',
    license: undefined,
    gameSize: { w: 500, h: 700 },
    ctx: undefined,
    car: undefined,
    obstacles: [],
    frameIndex: 0,
    init() {
        this.setContext()
        // this.setSize()
        this.createCar()
        this.createObstacle()
        this.car.init()
        this.drawAll()
        this.setEventHandlers()
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawGrass()
            this.drawHighway()
            this.drawLineL()
            this.drawLineR()
            this.drawLineC()
            this.car.draw()
            this.obstacles.frameIndex++
            this.frameIndex % 50 === 0 ? this.createObstacle() : null
        }, 40)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    drawGrass() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    drawHighway() {
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(40, 0, this.gameSize.w - 80, this.gameSize.h)
    },

    drawLineL() {
        this.ctx.beginPath()
        this.ctx.moveTo(60, 0)
        this.ctx.lineTo(60, this.gameSize.w + 200)
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawLineR() {
        this.ctx.beginPath()
        this.ctx.moveTo(440, 0)
        this.ctx.lineTo(440, this.gameSize.w + 200)
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawLineC() {
        this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, this.gameSize.w + 200)
        this.ctx.setLineDash([40, 10])
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0, 0])

    },

    createCar() {
        this.car = new Car(this.ctx, 215, 550, 75, 100)
    },

    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRigth() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
            key === 'ArrowUp' ? this.car.moveUp() : null
            key === 'ArrowDown' ? this.car.moveDown() : null
        })

    },


    createObstacle() {
        this.obstacles.push(
            new Obstacles(this.ctx, 203, 0, 100, 100, 10),
            new Obstacles(this.ctx, 203, 0, 100, 100, 10),
            new Obstacles(this.ctx, 203, 0, 100, 100, 10)
        )

        this.obstacles.forEach(elm => {
            elm.move()
            elm.createObstacles()
            // elm.fillRect(this.obsPos.x === Math.random() * 400, this.obsPos.y, this.obsSize.w, this.obsSize.h)
        })
    }
}






