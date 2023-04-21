const raceGame = {
    appName: 'Car Race app',
    author: 'Someone At Ironhack',
    version: '1.0.0',
    license: undefined,
    ctx: undefined,
    canvasSize: { w: 500, h: 700 },
    carInstance: undefined,
    carSpecs: {
        pos: { x: 100, y: 500 },
        size: { w: 75, h: 150 }
    },
    framesIndex: 0,
    obstacles: [],

    init() {
        this.setContext()
        this.setImageInstances()
        this.start()
        this.setEventListeners()

    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },

    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.drawObstacles()

    },

    drawRoad() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 225, 0, 450, this.canvasSize.h)


        this.ctx.strokeStyle = '#fff'
        this.ctx.lineWidth = 20
        this.ctx.setLineDash([])
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w / 2 - 200, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 200, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w / 2 + 200, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 + 200, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([40, 15])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.fillStyle = '#D3D3D3'
        this.ctx.fillRect(10, 10, 200, 50)
        this.ctx.font = 'bold 30px Courier';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(`Score: ${this.framesIndex}`, 20, 40);

    },

    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'

    },

    drawCar() {
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h,
        )
    },

    drawObstacles() {

        this.obstacles.forEach(elm => elm.draw())
        if (this.framesIndex % 20 === 0) {
            this.createObstacles()
        }
    },

    createObstacles() {
        this.obstacles.push(
            new Obstacle(this.ctx, this.canvasSize)
        )

        this.obstacles = this.obstacles.filter((obstacle) => {
            if (obstacle.obstacleSpecs.pos.y < this.canvasSize.h) {
                return obstacle
            }
        })

    },

    detectCollision() {
        this.obstacles.forEach(elm => {
            if (
                this.carSpecs.pos.x < elm.obstacleSpecs.pos.x + elm.obstacleSpecs.size.w &&
                this.carSpecs.pos.x + this.carSpecs.size.w > elm.obstacleSpecs.pos.x &&
                this.carSpecs.pos.y < elm.obstacleSpecs.pos.y + elm.obstacleSpecs.size.h &&
                this.carSpecs.size.h + this.carSpecs.pos.y > elm.obstacleSpecs.pos.y
            ) {
                elm.obstacleSpecs.collision = true
                this.gameOver()
                clearInterval(1)
            }
        })
    },

    gameOver() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.canvasSize.w / 2 - 100, this.canvasSize.h / 2 - 50, 230, 100);
        this.ctx.font = 'bold 35px Courier';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(`Game Over`, this.canvasSize.w / 2 - 85, this.canvasSize.h / 2 + 5);
        this.ctx.fillStyle = '#FF8D14'
        this.ctx.font = 'bold 18px Courier';
        this.ctx.fillText(`Your score is ${this.framesIndex}`, this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 + 25);

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    start() {
        const intervalId = setInterval(() => {
            console.log(intervalId)
            this.clearAll()
            this.drawAll()
            this.detectCollision()

            this.framesIndex++

        }, 50)


    },

    setEventListeners() {
        document.onkeydown = event => {

            const { key } = event

            if (key == 'ArrowLeft') {

                if (this.carSpecs.pos.x <= 0) {
                    this.carSpecs.pos.x = 0
                } else {
                    this.carSpecs.pos.x -= 10
                }

            }

            if (key == 'ArrowRight') {

                if (this.carSpecs.pos.x >= 400) {
                    this.carSpecs.pos.x = 400
                } else {
                    this.carSpecs.pos.x += 10
                }
            }
        }
    }
}
