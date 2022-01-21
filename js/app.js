const myApp = {
    appName: 'Island Racer',
    author: 'Ironhack student Hiba Berber',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    car: undefined,
    init() {
        this.setContext()
        this.setSize()
        this.drawRoad()
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
            w: 500,
            h: 800
        }
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)
    },

    drawRoad(){
    // green and gray rec
            this.ctx.fillStyle = 'green'
            this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
            this.ctx.fillStyle = '#ccc'
            this.ctx.fillRect(50, 0, this.gameSize.w-100, this.gameSize.h)

    // white lines
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([0, 0])
        this.ctx.beginPath() // coge lápiz
        this.ctx.moveTo(70, 0) // mueve hacia
        this.ctx.lineTo(70,this.gameSize.h) // desde donde estaba empieza a pintar hacia la nueva posición 
        this.ctx.moveTo(this.gameSize.w-70, 0)
        this.ctx.lineTo(this.gameSize.w-70,this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

   // dashed lines
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 20])
        this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },


    createCar() {
    this.car = new Car(this.ctx, 250, 600, 80, 150)
    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad ()
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

