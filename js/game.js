const carGame = {
    appName: 'Car Race Game',
    Author: 'Judit Angulo Castellano',
    Lisense: undefined,
    gameSize: { w: 500, h: 700 },
    obstacles: [],
    ctx: undefined,
    car: undefined,
    framesIndex: 0,
    obstacle: [],

    init() {
        this.setContext()
        this.drawAll()
        this.createCar()
        this.car.init()
        this.setEventHandlers()
    },



    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawFilledRectangle()
            this.drawRoad()
            this.drawLine()
            this.drawDashLine()
            this.car.draw()
        }, 40)
    },


    drawFilledRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)


    },

    drawRoad() {
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(25, 0, this.gameSize.w - 50, this.gameSize.h)
    },

    drawLine() {


        this.ctx.beginPath()
        this.ctx.moveTo(40, 0)
        this.ctx.lineTo(40, this.gameSize.h)
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
        this.ctx.closePath()


        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w - 40, 0)
        this.ctx.lineTo(this.gameSize.w - 40, this.gameSize.h)
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
        this.ctx.closePath()

    },
    drawDashLine() {

        this.ctx.setLineDash([40, 20])
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, 0)
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0, 0])


    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },


    createCar() {
        this.car = new Car(this.ctx, this.gameSize.w/2, this.gameSize.h -100, 80, 100)
    },

   
    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
            })
        }

}