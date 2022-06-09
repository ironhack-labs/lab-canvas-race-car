const raceCarApp = {
    name: 'Race Car',
    author: 'Leon Lonte',
    version: '1.0.0',
    license: undefined,
    description: 'Race car app',
    frameIndex: 0,
    canvaSize: {
        w: undefined,
        h: undefined
    },

    ctx: undefined,
    init(canvas) {
        this.ctx = document.querySelector(canvas).getContext('2d')
        this.setDimensions(canvas)
        this.setEventListeners()
        this.createCar()
        this.createObstacle()
        this.drawAll()
    },

    setDimensions(canvas) {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        document.querySelector(canvas).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvas).setAttribute('height', this.canvasSize.h)
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

    createRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)

        this.ctx.setLineDash([0, 0])
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(450, 0)
        this.ctx.lineTo(450, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([60, 30])
        this.ctx.moveTo(240, 0)
        this.ctx.lineTo(240, 700)
        this.ctx.stroke()
        this.ctx.closePath()

    },

    createObstacle() {
        this.obstacle = new Obstacle(this.ctx, 100, 150, 300, 100)
    },

    createCar() {
        this.car = new Car(this.ctx, 218, 500, 50, 100, 'car.png')
    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.createRoad()
            this.car.draw()
            this.obstacle.draw()

        }, 500)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }


}


// // Generar obstáculos de manera interválica
// // Ajustar el ancho dinámico para los obstáculos
// // Detectar la colisión de estos con el coche
// // Mostrar puntuación


