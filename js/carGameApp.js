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
    backgroundImageName: undefined,
    imageInstance: undefined,


    init(id) {
        this.canvasDom = document.getElementById(`${id}`)
        this.ctx = this.canvasDom.getContext('2d')
            // const seeDOM = this.canvasDom
            // console.log(this.canvasDom.width)
        this.backgroundImageName = 'road.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.backgroundImageName}`
        this.imageInstance.onload = () => this.setBackgroundImg()
        this.setDimensions()
    },

    renderGame() {
        this.createCar()
        setInterval(() => {
            this.setBackgroundImg()
            this.car.drawCar()
        }, 500)
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
        this.car = new Car(this.ctx, this.canvasSize, this.canvasSize.w / 2, this.canvasSize.h / 2)
    }

}