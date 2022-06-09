const canvasApp = {
    name: 'Racecar game in canvas',
    author: 'Alejandro Fisman',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas app for basic shapes drawing',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    car: undefined,
    framesIndex: 0,
    obstacle: [],

    init(canvasID) {
        this.ctx = document.querySelector(canvasID).getContext('2d')
        this.setDimensions(canvasID)
        this.createRoad()
        this.setEventListeners()
        this.createAll()
        this.drawAll()

    },
    setDimensions(canvasID) {
        this.canvasSize = {
            w: window.innerWidth / 2,
            h: window.innerHeight
        }
        document.querySelector(canvasID).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasID).setAttribute('height', this.canvasSize.h)

    },
    createRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)

        this.drawMiddleLine()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([0, 0])
        this.ctx.moveTo(45, this.canvasSize.h)
        this.ctx.lineTo(45, 0)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([0, 0])
        this.ctx.moveTo(this.canvasSize.w - 45, this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w - 45, 0)
        this.ctx.stroke()
        this.ctx.closePath()


    },
    drawMiddleLine() {
        this.ctx.lineWidth = 8
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([30, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w / 2, 0)
        this.ctx.stroke()
        this.ctx.closePath()

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
                case 'ArrowUp':
                    this.car.moveUp()
                    break;
                case 'ArrowDown':
                    this.car.moveDown()
                    break;

            }
        }

    },

    createAll() {
        this.car = new Car(this.ctx, this.canvasSize.w / 2 - 50, this.canvasSize.h - 180, 100, 160, this.canvasSize)

    },
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.createRoad()
            this.car.draw()

        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

}