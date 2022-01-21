const drawingApp = {
    appName: 'Canvas drawing app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: 500, h: 700 },
    ctx: undefined,
    : [],
    framesIndex: 0,       
    init() {
        this.setContext()
        this.createCar()
        this.drawAll()
        this.drawRoad()
        this.setEventHandlers()
        
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        console.log(this.ctx)
    },

    drawRoad(){
        this.drawFilledRectangle()
        this.drawRegularLines()

    },
   
    drawFilledRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(30, 0, this.gameSize.w - 70, this.gameSize.h )

    },
    drawLinearRectangle() {
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'green'
        this.ctx.strokeRect(100, 100, 200, 200)
    },
    drawRegularLines() {

        this.ctx.beginPath()
        this.ctx.lineWidth = 15;
        this.ctx.strokeStyle = 'white';
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.lineWidth = 15;
        this.ctx.strokeStyle = 'white';
        this.ctx.moveTo(this.gameSize.w - 50, 0)
        this.ctx.lineTo(this.gameSize.w - 50, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        // this.ctx.lineWidth = 10
        // this.ctx.strokeStyle = 'red'

        // this.ctx.beginPath()
        // this.ctx.moveTo(100, 200)
        // this.ctx.lineTo(this.gameSize.w - 100, 200)
        // this.ctx.stroke()
        // this.ctx.closePath()
    },
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'red'
        this.ctx.beginPath()
        this.ctx.moveTo(100, 200)
        this.ctx.setLineDash([60, 20])
        this.ctx.lineTo(this.gameSize.w - 100, 200)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    
    drawText(text) {
        this.ctx.font = '50px arial'
        this.ctx.fillText(text, 100, 100)
    },
    insertImage(name) {
        const imageInstance = new Image()
        imageInstance.src = `img/${name}`
        imageInstance.onload = () => this.ctx.drawImage(imageInstance, 100, 100, 200, 200)
    },
    
    createCar() {
        this.car = new Car(this.ctx, 100, 100, 100, 100)
    },
   
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad()
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

