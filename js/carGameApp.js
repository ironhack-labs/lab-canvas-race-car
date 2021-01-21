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
        this.createObstacle()
        setInterval(() => {
            this.clearScreen
            this.setBackgroundImg()
            this.car.drawCar()
            this.obstacles.forEach(elm => elm.drawObstacle())
        }, 500)
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
        this.car = new Car(this.ctx, this.canvasSize, this.canvasSize.w / 2, this.canvasSize.h * 0.8)
    },

    createObstacle() {
        this.obstacles.push(new Obstacle(this.ctx, this.canvasSize, 0, this.car.getCarWidth()))
    }

}