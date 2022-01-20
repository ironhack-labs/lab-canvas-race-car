const Kart = {
    appName: 'Island Racer',
    author: 'Cristian Perdomo',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: 500, h: 700 },
    ctx: undefined,
    car: undefined,
    obstacle: undefined,
    obstArray : [],
    framesIndex: 0,


    init () {
        this.setContext()
        this.createCar()
        this.createObst()
        this.drawAll()
        this.setEventHandlers()

    },
    
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        console.log(this.ctx)

    },

    drawAll() {
        setInterval(() => {
            this.framesIndex++                                          
            this.framesIndex % 30 === 0 ? this.drawObst() : null  
            this.clearAll()
            this.drawSquare()
            this.drawDashed()
            this.drawObst
            this.drawCar()
        }, 5)
    },
    
    drawSquare() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(30, 0, this.gameSize.w -60, this.gameSize.h)
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.strokeRect(50, 0, this.gameSize.w - 100, this.gameSize.h)
    },

    drawDashed() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w/2, 0)
        this.ctx.setLineDash([50, 20])
        this.ctx.lineTo(this.gameSize.w/2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0, 0])

    },

    createCar() {
        this.car = new Car (this.ctx, this.gameSize.w/2, this.gameSize.h - 100, 60, 100)
    },

    drawCar() {
        this.car.draw()
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
    },

    createObst() {
        this.obstArray.push(
            this.obstacle = new Obstacle (this.ctx, Math.floor(Math.random() * ((this.gameSize.w - 100) - 50)) + 50, 0, Math.floor(Math.random() * ((this.gameSize.w - 100) - 50)) + 50, 50, 10)
        )
    },

    drawObst () {
        this.obstacle.draw()
    },

    //     this.ctx.lineWidth = 10
    //     this.ctx.strokeStyle = 'red'

    //     this.ctx.beginPath()
    //     // this.ctx.moveTo(100, 200)
    //     // this.ctx.lineTo(this.gameSize.w - 100, 200)
    //     this.ctx.stroke()
    //     this.ctx.closePath()

        

}
