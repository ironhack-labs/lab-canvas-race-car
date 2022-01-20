const carApp = {
    appName: 'car',
    author: 'Jorge Garzon',
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    car: undefined,
    obstacle: undefined,
    obstacles: [],
    framesIndex: 0,
    score: 0,

    init() {
        this.setContext()
        this.setSize()
        this.drawFilledRectangle()
        this.newCar()

        this.drawAll()
        this.setEventHandlers()

    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        console.log(this.ctx)
    },

    setSize() {
        this.gameSize = {
            w: canvas.width,
            h: canvas.height
        }
    },
    // document.querySelector('#myCanvas').setAttribute('width', this.gameSize.w)
    // document.querySelector('#myCanvas').setAttribute('height', this.gameSize.h)

    drawFilledRectangle() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 30, this.gameSize.h)
        this.ctx.fillRect(this.gameSize.w - 30, 0, 30, this.gameSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.gameSize.w - 60, 0, 10, this.gameSize.h)
        this.ctx.fillRect(50, 0, 10, this.gameSize.h)
        // this.ctx.fillRect(this.gameSize.w /2, 0, 10, this.gameSize.h)
        this.drawDashedLines()
    },
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, 0)
        this.ctx.setLineDash([60, 20])
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    newCar() {
        this.car = new car(this.ctx, this.gameSize.w / 2, this.gameSize.h - 100, 50, 50)
    },
    drawAll() {
        intervalID = setInterval(() => {
            this.framesIndex++
           
            this.framesIndex % 60 === 0 ? this.createObstacles() : null
            this.clearAll()
            this.drawFilledRectangle()
            this.car.draw()
            this.obstacles.forEach(elm => {
                elm.draw()
            })
            this.checkColision()
            this.cleanObstacles()
            this.score = this.framesIndex / 50
            console.log(this.score)

        }, 50)
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
    },

    createObstacles() {

        let randWidth = Math.floor(Math.random() * this.gameSize.w / 2)
        let maxStart = this.gameSize.w - randWidth
        let randomStart = Math.floor(Math.random() * maxStart)
        let obs = new obstacle(this.ctx, randomStart, 50, randWidth, 30)
        this.obstacles.push(obs)

    },
    cleanObstacles() {
        if (this.obstacles.length === 10) {
            this.obstacles.unshift()
        }
    },
    checkColision() {

        this.obstacles.forEach(obstacle => {
            if (this.car.carPos.x < obstacle.obstaclePos.x + obstacle.obstacleSize.w &&
                this.car.carPos.x + this.car.carSize.w > obstacle.obstaclePos.x &&
                this.car.carPos.y < obstacle.obstaclePos.y + obstacle.obstacleSize.h &&
                this.car.carSize.h + this.car.carPos.y > obstacle.obstaclePos.y) {
                console.log('colision')
                this.gameOver()
            } else {
                return false
            }
        })


    },
    gameOver() {
        clearInterval(intervalID)
        this.obstacles = ''
        
    }

}