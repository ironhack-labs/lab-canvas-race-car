const RaceApp = {
    name: 'RaceCars',
    description: 'Race Car for Lab',
    version: '1.0',
    license: undefined,
    author: 'Aldi',
    canvasTag: undefined,
    ctx: undefined,
    carInstance: undefined,
    carPosition: { x: 215, y: 600 },
    carSize: { w: 70, h: 100 },
    canvasSize: { w: undefined, h: undefined },
    init() {
        this.createCar()
        this.setContext()
        this.setEventListener()
        this.start()
    },

    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
        console.log(this.ctx)
        console.log(this.canvasTag)

    },

    start() {
        setInterval(() => {

            this.clearAll()
            this.drawAll()
            this.setEventListener
            this.framesIndex++

            if (this.framesIndex % 100 === 0) this.generateObstacle()
        }, 10);
    },

    setDimensions() {
        this.canvasSize = {
            w: 700,
            h: 500
        }
    },

    setEventListener() {
        document.onkeydown = evt => {
            if (evt.key === 'Arrowleft') this.carPosition.x -= 10
            if (evt.key === 'Arrowright') this.carPosition.x += 10
            console.log(this.setEventListener)
        }

    },

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 50, 700)

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(450, 0, 50, 700)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 10, 700)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(430, 0, 10, 700)

    },
    drawDashedLine() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.carInstance = new Image()

        this.carInstance.src = './images/car.png'

    },

    drawAll() {

        this.drawRoad()
        this.drawDashedLine()
        this.drawCar()

    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.h, this.canvasSize.w)
    },

    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    },

    generateObstacle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(40, 0, 10, 10)




    }


}




// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

