const MyCarApp = {
    appName: 'RaceCar',
    author: 'JC',
    version: '0.0.0.0.1',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    obstacles: [],
    framesIndex: 0,
    numRandom: 0,
    randomWidth: 0,
    intervalID: undefined,
    lost: 0,
    init() {
        this.setContext()
        this.setSize()
        this.createRoad()
        this.createCar()
        this.createObstacles()
        this.drawAll()
        this.setEventHandlers()

    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },


    setSize() {
        this.gameSize = { w: this.ctx.canvas.width, h: this.ctx.canvas.height }
    },
    createRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = '#747971'
        this.ctx.fillRect(25, 0, 450, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(33, 0, 5, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(462, 0, 5, 700)
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(245, 0)
        this.ctx.setLineDash([40, 10])
        this.ctx.lineTo(245, 700)
        this.ctx.stroke()
        this.ctx.closePath()

    },

    createCar() {
        this.car = new Car(this.ctx, 50, this.gameSize.h - 140, 100, 10, this.gameSize)
    },

    getRandomPosition(num1, num2) {
        this.numRandom = Math.floor(Math.random() * (num2 - num1)) + num1;

    },

    getRandomWidth(num1, num2) {
        this.randomWidth = Math.floor(Math.random() * (num2 - num1)) + num1;
    },


    createObstacles() {
        this.framesIndex % 125 === 0 ? this.obstacles.push(
            new Obstacle(this.ctx, this.numRandom, 0, this.randomWidth, 40, this.gameSize, 3),
        ) : null
    },

    checkCollision(elm) {
        if (elm.obstPos.x < this.car.carPos.x + this.car.carSize.w &&
            elm.obstPos.x + elm.oSize.w > this.car.carPos.x &&
            elm.obstPos.y < this.car.carPos.y + this.car.carSize.h &&
            elm.oSize.h + elm.obstPos.y > this.car.carPos.y) {
            this.lost = 1
            this.stop()
        }
    },
    printScore() {
        this.ctx.font = "bold 30px Arial";
        this.ctx.fillStyle = "#000000"
        this.ctx.fillText(`Tu puntaje es: ${Math.floor(this.framesIndex / 8)}`, 50, 50);
    },

    drawAll() {
        if (!this.intervalID) {
            this.intervalID = setInterval(() => {
                this.getRandomPosition(0, (this.gameSize.w - this.randomWidth))
                this.getRandomWidth(150, 300)
                this.framesIndex++
                this.clearScreen()
                this.createRoad()
                this.car.draw()
                this.createObstacles()
                this.obstacles.forEach(elm => {
                    elm.draw()
                    elm.move()
                    this.printScore()
                    this.checkCollision(elm)
                })
                this.lost == 1 ? this.lostScreen() : null
                // ^^ hacer esta lógica me costó un montón, me gustaría que si leeis esto me digais 'recibido' en persona
            }, 15)
        }
    },
    lostScreen() {
        this.clearScreen()
        this.printGO()
    },

    printGO() {
        this.ctx.fillText(`¡Has perdido! Tu puntaje fue '${Math.floor(this.framesIndex / 8)}'`, 10, 80)
        const audio = new Audio('sounds/gameoversound.mp3');
        audio.play()
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
        })
    },

    stop() {
        clearInterval(this.intervalID);
        this.intervalID = null;
        this.clearScreen()
    }
}