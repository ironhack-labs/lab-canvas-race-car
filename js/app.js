const roadApp = {
    name: 'road car',
    author: 'Carolina Arlone',
    version: '1.0',
    description: 'Canvas Race Car',
    canvasSize: { w: undefined, h: undefined },

    ctx: undefined,
    car: undefined,
    obstacles: [],
    framesIndex: 0,

    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setEventListeners()
        this.setDimensions(canvasId)
        this.drawRectangle()
        this.drawLines()
        this.drawLinesdisc()
        this.createAll()
        this.drawAll()




    },


    setDimensions(canvasId) {
        this.canvasSize = { w: 500, h: 700 },

            document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },

    drawRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
    },

    drawLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.setLineDash([0, 0])
        this.ctx.lineTo(50, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()


        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 50, 0)
        this.ctx.setLineDash([0, 0])
        this.ctx.lineTo(this.canvasSize.w - 50, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawLinesdisc() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.setLineDash([40, 20])
        this.ctx.lineTo(this.canvasSize.w / 2, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },


    createAll() {
        this.car = new car(this.ctx, 210, 500, 90, 180)
    },

    drawAll() {
        setInterval(() => {
            this.drawRectangle()
            this.drawLines()
            this.drawLinesdisc()
            this.car.drawCar()

            this.obstacles.forEach(obstacle => {
                obstacle.moveDown()
                obstacle.drawObs()
            })
            if (this.framesIndex % 100 === 0) {
                this.createObs()
            }
            this.framesIndex++;
        }, 50)
    },

    setEventListeners() {
        document.onkeydown = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.car.moveLeft()
                    break;
                case 'ArrowRight':
                    this.car.moveRight()
                    break;
            }
        }
    },

    createObs() {

        this.obstacles.push(new obs(this.ctx))
    },


}

