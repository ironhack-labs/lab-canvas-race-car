const dynamicApp = {
    appName: 'Canvas dynamic app',
    author: 'Ana Sánchez Muñoz',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    car: undefined,
    // obstacles =[],
    framesIndex: 0,
    // Extra!
    init() {
        this.setContext()
        this.setSize()
        this.drawFilledRectangle()
        this.drawRegularLine()
        this.drawDashedLine()
        this.createCar()
        this.drawAll()
        this.setEventHandlers()
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        console.log(this.ctx)
    },
    setSize() {
        this.gameSize = {
            w: window.innerWidth / 2,
            h: window.innerHeight
        }
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)
    },
    drawFilledRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(25, 0, this.gameSize.w - 50, this.gameSize.h)

    },
    drawRegularLine() {
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = "white"
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()


        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = "white"

        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w - 50, 0)
        this.ctx.lineTo(this.gameSize.w - 50, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },


    drawDashedLine() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, 0)
        this.ctx.setLineDash([60, 20])
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0, 0])

    },
    createCar() {
        this.car = new Car(this.ctx, 365, 600, 50, 100)
    },
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawFilledRectangle()
            this.drawRegularLine()
            this.drawDashedLine()
            this.car.draw()

        }, 40)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },


    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
        })


    }

}
