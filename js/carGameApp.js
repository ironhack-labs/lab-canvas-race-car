const carApp = {
    name: 'Car App',
    description: '',
    author: 'Bárbara Díaz',
    version: '1.0.0',
    license: undefined,
    canvasDom: undefined,
    /** @type {CanvasRenderingContext2D} */
    ctx: undefined,
    canvasSize: undefined,
    car: undefined,
    obstacles: [],
    backgroundImageName: undefined,
    imageInstance: undefined,
    keys: {
        left: 'ArrowLeft',
        right: 'ArrowRight'
    },
    frames: 0,
    intervalID: undefined,
    score: 0,

    init(id) {
        this.canvasDom = document.getElementById(`${id}`)
        this.ctx = this.canvasDom.getContext('2d')
        this.backgroundImageName = 'road.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.backgroundImageName}`
        this.imageInstance.onload = () => this.setBackgroundImg()
        this.setDimensions()
        this.setEventListeners()
    },

    renderGame() {
        this.createCar()
        this.intervalID = setInterval(() => {
            this.clearScreen
            this.setBackgroundImg()
            this.car.drawCar()
            this.obstacles.forEach(elm => {
                elm.drawObstacle()
                elm.moveObstacle()
            })
            this.displayScore()
            this.frames++
                if (this.frames % 30 === 0) {
                    this.countScore()
                }
            if (this.frames % 60 === 0) {
                this.createObstacle()
            }
            this.detectCollision()
        }, 40)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.w)
    },

    setEventListeners() {
        document.addEventListener('keydown', (event) => {
            if (event.key === this.keys.left) {
                this.car.moveCar(-25)
            }
            if (event.key === this.keys.right) {
                this.car.moveCar(25)
            }
        })
    },

    setDimensions() {
        this.canvasSize = {
            w: this.canvasDom.width,
            h: this.canvasDom.height,
        }
    },

    setBackgroundImg() {
        this.ctx.drawImage(this.imageInstance, 0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createCar() {
        this.car = new Car(this.ctx, this.canvasSize)
    },

    createObstacle() {
        this.obstacles.push(new Obstacle(this.ctx, this.canvasSize, this.car.getCarWidth()))
    },

    detectCollision() {
        this.obstacles.forEach(elm => {
            if ((this.car.getLeftBorder() < elm.getRightBorder()) && (this.car.getRightBorder() > elm.getLeftBorder()) && (this.car.getBottomBorder() > elm.getTopBorder()) && (this.car.getTopBorder() < elm.getBottomBorder())) {
                console.log('your score ', this.score)
                console.log('collision')
                clearInterval(this.intervalID)
                this.showEndMessg()
                return true
            }
        })

    },

    countScore() {
        this.score++
    },

    displayScore() {
        this.ctx.font = '48px serif'
        this.ctx.fillStyle = 'rgb(63, 12, 12)'
        this.ctx.fillText(`Score: ${this.score}`, 50, 50)
    },

    showEndMessg() {
        document.getElementById('end-msg').innerText = `Game Over! \n Final Score: ${this.score}`
        document.querySelector('.end-msg-container').style.display = 'block'
    },

    restartGame() {
        this.car = undefined
        this.obstacles = []
        this.score = 0
        this.intervalID = undefined
        document.querySelector('.end-msg-container').style.display = 'none'
    }

}