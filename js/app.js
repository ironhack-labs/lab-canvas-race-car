const carRaceApp = {
    name: 'Car race aplication',
    author: 'Víctor Sobrinos',
    version: '1.0.0',
    license: undefined,
    description: 'Car race game, for all ages',

    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,

    framesIndex: 0,

    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
        this.drawAll()
        this.createAll()
        this.setEventListeners()

    },

    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth / 2, // mitad de pantalla
            h: window.innerHeight
        }

        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)

    },
    drawRoad() {
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillRect(20, 0, this.canvasSize.w - 40, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(20, 0, this.canvasSize.w - 40, this.canvasSize.h)

        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)

        this.ctx.fillRect(60, 0, this.canvasSize.w - 120, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(60, 0, this.canvasSize.w - 120, this.canvasSize.h)

        //Linea discontinua
        this.ctx.lineWidth = 8
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.setLineDash([50, 50])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

    },
    createAll() {

        this.car = new Car(this.ctx, this.canvasSize.w / 2 - 25, 550)

    },


    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad()
            this.car.draw()

            this.framesIndex++
            console.log(framesIndex)
            if (this.framesIndex % 50 === 0) {
                this.generateObstacle()
            }
        }, 50)


    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacle() {
        console.log('obs')
        this.obstacle = new Obstacle(this.ctx, 100, 100)
        obstacle.createObstacle()

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
    }

}

