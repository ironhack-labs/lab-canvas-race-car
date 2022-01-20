const drawingApp = {
    appName: 'Canvas drawing app',
    author: 'Ernesto Espinoza',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    car: undefined,
    framesIndex: 0,
    init() {
        // console.log('hola')
        this.setContext()
        this.setSize()
        this.drawRoad()
        this.drawRegularLines()
        this.drawDashedLines()
        this.createCar()
        this.drawAll()
        this.setEventHandlers()

    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        // console.log(this.ctx)
    },
    setSize() {
        this.gameSize = {
            w: window.innerWidth / 2,
            h: window.innerHeight
        }
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)
    },

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.gameSize.w - 100, this.gameSize.h)

    },
    drawRegularLines() {

        this.ctx.lineWidth = 25
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 10, 0)
        this.ctx.lineTo(this.gameSize.w / 10, 900)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 25
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 1.11, 0)
        this.ctx.lineTo(this.gameSize.w / 1.11, 900)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, 0)
        this.ctx.setLineDash([70, 40])
        this.ctx.lineTo(this.gameSize.w / 2, 900)
        this.ctx.stroke()
        this.ctx.setLineDash([0, 0])
        this.ctx.closePath()
        
    },
    createCar() {
        this.car = new Car(this.ctx, this.gameSize.w / 2 - 30, 700, 60, 110)
    },


    drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.car.moveRight()
            this.car.moveLeft()
            this.drawRoad()
            this.drawRegularLines()
            this.drawDashedLines()
            this.car.draw()
            console.log()
            
            
            
           
        }, 40)
    },

    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
            
        })
    },

    createObstacle() {
        this.obstacle = new Obstacles
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    }



}