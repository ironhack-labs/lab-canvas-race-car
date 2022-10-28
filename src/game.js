const Game = {
    name: 'Canvas race car',
    author: 'Hongen Shyu Barcel',
    version: '1.0.0',
    description: 'Forza Horizon was inspirated by this game',

    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,

    car: undefined,
    road: undefined,
    obstacle: undefined,

    score: 0,
    loose: undefined,

    framesCounter: 0,
    intervalId: undefined,

    init() {
        this.canvas = document.querySelector('#canvas')
        this.ctx = this.canvas.getContext('2d')


        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.width = window.innerWidth / 2
        this.height = window.innerHeight

        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    start() {
        this.generateAll()

        this.intervalId = setInterval(() => {
            this.framesCounter++
            if (this.framesCounter % 60 === 0) this.score.score++
            this.clearAll()
            this.checkCollision()
            this.drawAll()

        }, 1000 / this.FPS) // 60 --> 1 segundo...


    },

    drawAll() {
        this.road.draw()
        this.car.draw()
        this.score.draw()
        this.road.obstacles.forEach(obstacle => obstacle.draw())
    },

    generateAll() {
        this.car = new Car(this.ctx, this.width, this.height)
        this.road = new Road(this.ctx, this.width, this.height)
        this.score = new Score(this.ctx, this.width, this.height)
        this.loose = new Loose(this.ctx, this.width, this.height)
    },

    checkCollision() {
        this.road.obstacles.forEach(obstacle => {
            if (obstacle.posY >= this.car.posY)
                this.gameOver() // AÑADIR SEGUNDA CONDICIÓN DE COLISIÓN && <=
        })
        // posX + anchura BALA
        // posX patata
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    gameOver() {
        clearInterval(this.intervalId)
        this.clearAll()
        this.loose.draw()
        setTimeout(() => {
            this.loose.draw()
        }, 500)
        setTimeout(() => {
            location.reload()
        }, 3000)
    }
}