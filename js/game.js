//aquí metodos y funciones
const game = {
    appName: 'Car Game',
    author: 'Lourdes González',
    version: '1.0.0',
    license: undefined,
    description: 'Basic Game',
    ctx: undefined,
    framesIndex: 0,
    canvasSize: {
        w: 500,
        h: 700
    },

    carInstance: undefined,
    carSpecs: {
        pos: { x: 300, y: 600 },
        size: { w: 100, h: 100 }
    },

    obstacles: [],

    init() {
        this.setContext()
        this.setImageInstance()
        this.setEventListeners()
        this.clearAll()
        this.start()

    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')

    },
    setEventListeners() {
        document.onkeyup = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 40
            }

            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 40
            }
        }
    },

    setImageInstance() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    createObstacle() {
        const posX = Math.floor(Math.random() * 500)
        this.obstacles.push(
            new Obstacle(this.ctx, this.canvasSize, posX)
        )
    },

    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.createObstacle()



        this.obstacles.forEach((elm) => {
            elm.moveObstacle()
            elm.drawObstacle()
            if (this.framesIndex % 300 === 0) this.createObstacle()
        })
    },


    drawRoad() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.canvasSize.w / 4 - 125, 10, 500, this.canvasSize.h)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(this.canvasSize.w / 3 - 115, 10, 400, this.canvasSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(this.canvasSize.w / 1 - 70, 9, 10, this.canvasSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(this.canvasSize.w / 3.7 - 70, 9, 10, this.canvasSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(this.canvasSize.w / 1.6 - 70, 9, 8, this.canvasSize.h)


    },


    drawCar() {

        this.ctx.drawImage(this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },



    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
        }, 50)
    },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },


}