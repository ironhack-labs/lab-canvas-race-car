const app = {
    appName: 'Race Canvas Lab',
    version: '1.0.0',
    license: undefined,
    author: 'Pedro Suárez',
    description: 'First Canvas project',
    ctx: undefined,
    imageInstance: undefined,
    obs: [],
    canvasSize: {
        w: 500, h: 700,
    },
    carData: {
        pos: { x: 200, y: 500 },
        size: { w: 100, h: 175 },
        image: './images/car.png'
    },

    framesCounter: 0,
    score: 0,

    init() {

        this.setContext()
        this.drawRoad()
        this.createCar()
        this.setEventHandlers()
        this.createObs()
        this.start()

    },
    setContext() {

        this.ctx = document.querySelector('#canvas').getContext('2d');
        console.log(this.ctx)

    },

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'a':
                    this.carData.pos.x -= 20
                    break;
                case 'ArrowLeft':
                    this.carData.pos.x -= 20
                    break;
                case 'd':
                    this.carData.pos.x += 20
                    break;
                case 'ArrowRight':
                    this.carData.pos.x += 20
                    break;
                case 'w':
                    this.carData.pos.y -= 20
                    break;
                case 's':
                    this.carData.pos.y += 20
            }
        }
    },

    drawRoad() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)



        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(65, 0, 15, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w - 80, 0, 15, this.canvasSize.h)


        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([60, 50])
        this.ctx.stroke()

    },

    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
    },

    createObs() {
        this.obs.push(
            new Obstacle(this.ctx, this.canvasSize)
        )
    },

    start() {
        setInterval(() => {
            // console.log('klk')
            this.framesCounter++
            if (this.framesCounter % 30 === 0) {
                this.createObs()
                this.score++
            }

            this.clearAll()
            this.drawAll()
            this.moveAll()
            this.checkColisions()
            this.printScore()
            this.setEventHandlers()



        }, 50)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },


    moveAll() {
        this.obs.forEach(elm => elm.moveObs())

    },


    drawAll() {
        this.drawRoad()
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h,
        )
        this.obs.forEach(elm => elm.drawObs())
    },

    checkColisions() {

        this.obs.forEach(elm => {
            // console.log(elm)

            if (elm.pos.x < this.carData.pos.x + this.carData.size.w &&
                elm.pos.x + elm.size.w > this.carData.pos.x &&
                elm.pos.y < this.carData.pos.y + this.carData.size.h &&
                elm.size.h + elm.pos.y > this.carData.pos.y) {
                this.gameOver()
            }

        })
    },

    gameOver() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 100, this.canvasSize.w, this.canvasSize.h - 200)


        this.ctx.fillStyle = 'red'
        this.ctx.font = '50px Arial'
        this.ctx.fillText('GAME OVER', 100, 250)

        this.ctx.fillStyle = 'white'
        this.ctx.font = '20px Arial'
        this.ctx.fillText(`Your Score is ${this.score}`, 180, 300)

        clearInterval(1)
    },

    printScore() {
        this.ctx.fillStyle = 'white'
        this.ctx.font = '20px Arial'
        this.ctx.fillText(`Score: ${this.score}`, 100, 50)
    }

}



